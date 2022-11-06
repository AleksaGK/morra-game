"reach 0.1";

const [isHand, H_ZERO, H_ONE, H_TWO, H_THREE, H_FOUR, H_FIVE] = makeEnum(6);
const [
  isResult,
  R_ZERO,
  R_ONE,
  R_TWO,
  R_THREE,
  R_FOUR,
  R_FIVE,
  R_SIX,
  R_SEVEN,
  R_EIGHT,
  R_NINE,
  R_TEN,
] = makeEnum(11);
const [isOutcome, A_WINS, DRAW, R_WINS] = makeEnum(3);

const winner = (handAleksa, handRuzica, resultAleksa, resultRuzica) => {
  if (resultAleksa == resultRuzica) {
    return DRAW;
  } else if (handAleksa + handRuzica == resultAleksa) {
    return A_WINS;
  } else if (handAleksa + handRuzica == resultRuzica) {
    return R_WINS;
  } else {
    return DRAW;
  }
};

assert(winner(H_ZERO, H_ZERO, R_ZERO, R_ZERO) == DRAW);
assert(winner(H_ZERO, H_ZERO, R_ONE, R_ZERO) == R_WINS);
assert(winner(H_ZERO, H_ZERO, R_ZERO, R_ONE) == A_WINS);

forall(UInt, (handAleksa) =>
  forall(UInt, (handRuzica) =>
    forall(UInt, (resultAleksa) =>
      forall(UInt, (resultRuzica) =>
        assert(
          isOutcome(winner(handAleksa, handRuzica, resultAleksa, resultRuzica))
        )
      )
    )
  )
);

forall(UInt, (handAleksa) =>
  forall(UInt, (handRuzica) =>
    forall(UInt, (result) =>
      assert(winner(handAleksa, handRuzica, result, result) == DRAW)
    )
  )
);

const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  getResult: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Aleksa = Participant("Aleksa", {
    ...Player,
    wager: UInt,
  });
  const Ruzica = Participant("Ruzica", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  Aleksa.only(() => {
    const amount = declassify(interact.wager);
    //hand
    const _handAleksa = interact.getHand();
    const [_commitHandAleksa, _saltHandAleksa] = makeCommitment(
      interact,
      _handAleksa
    );
    const commitHandAleksa = declassify(_commitHandAleksa);
    //result
    const _resultAleksa = interact.getResult();
    const [_commitResultAleksa, _saltResultAleksa] = makeCommitment(
      interact,
      _resultAleksa
    );
    const commitResultAleksa = declassify(_commitResultAleksa);
  });

  Aleksa.publish(commitHandAleksa, commitResultAleksa, amount).pay(amount);
  commit();

  unknowable(
    Ruzica,
    Aleksa(_handAleksa, _saltHandAleksa, _resultAleksa, _saltResultAleksa)
  );

  Ruzica.only(() => {
    interact.acceptWager(amount);
    const handRuzica = declassify(interact.getHand());
    const resultRuzica = declassify(interact.getResult());
  });
  Ruzica.publish(handRuzica, resultRuzica).pay(amount);
  commit();

  Aleksa.only(() => {
    const saltHandAleksa = declassify(_saltHandAleksa);
    const handAleksa = declassify(_handAleksa);

    const saltResultAleksa = declassify(_saltResultAleksa);
    const resultAleksa = declassify(_resultAleksa);
  });

  Aleksa.publish(handAleksa, saltHandAleksa, resultAleksa, saltResultAleksa);
  checkCommitment(commitHandAleksa, saltHandAleksa, handAleksa);
  checkCommitment(commitResultAleksa, saltResultAleksa, resultAleksa);

  const outcome = winner(handAleksa, handRuzica, resultAleksa, resultRuzica);

  const [forAleksa, forRuzica] =
    outcome == A_WINS ? [2, 0] : outcome == R_WINS ? [0, 2] : [1, 1];

  transfer(forAleksa * amount).to(Aleksa);
  transfer(forRuzica * amount).to(Ruzica);

  commit();

  each([Aleksa, Ruzica], () => {
    interact.seeOutcome(outcome);
  });
});
