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
const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const winner = (handAleksa, handRuzica, resultAleksa, resultRuzica) => {
  if (resultAleksa == resultRuzica) {
    return DRAW;
  } else if (handAleksa + handRuzica == resultAleksa) {
    return A_WINS;
  } else if (handAleksa + handRuzica == resultRuzica) {
    return B_WINS;
  } else {
    return DRAW;
  }
};

assert(winner(H_ZERO, H_ZERO, R_ZERO, R_ZERO) == DRAW);
assert(winner(H_ZERO, H_ZERO, R_ONE, R_ZERO) == B_WINS);
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
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Aleksa = Participant("Aleksa", {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Ruzica = Participant("Ruzica", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([Aleksa, Ruzica], () => {
      interact.informTimeout();
    });
  };

  Aleksa.only(() => {
    const amount = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });

  Aleksa.publish(amount, deadline).pay(amount);
  commit();

  Ruzica.only(() => {
    interact.acceptWager(amount);
  });
  Ruzica.pay(amount).timeout(relativeTime(deadline), () =>
    closeTo(Aleksa, informTimeout)
  );

  var outcome = DRAW;
  invariant(balance() == 2 * amount && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();

    Aleksa.only(() => {
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

    Aleksa.publish(commitHandAleksa, commitResultAleksa).timeout(
      relativeTime(deadline),
      () => {
        closeTo(Ruzica, informTimeout);
      }
    );
    commit();

    unknowable(
      Ruzica,
      Aleksa(_handAleksa, _saltHandAleksa, _resultAleksa, _saltResultAleksa)
    );

    Ruzica.only(() => {
      const handRuzica = declassify(interact.getHand());
      const resultRuzica = declassify(interact.getResult());
    });
    Ruzica.publish(handRuzica, resultRuzica).timeout(
      relativeTime(deadline),
      () => closeTo(Aleksa, informTimeout)
    );
    commit();

    Aleksa.only(() => {
      const saltHandAleksa = declassify(_saltHandAleksa);
      const handAleksa = declassify(_handAleksa);

      const saltResultAleksa = declassify(_saltResultAleksa);
      const resultAleksa = declassify(_resultAleksa);
    });
    Aleksa.publish(
      handAleksa,
      saltHandAleksa,
      resultAleksa,
      saltResultAleksa
    ).timeout(relativeTime(deadline), () => {
      closeTo(Ruzica, informTimeout);
    });

    checkCommitment(commitHandAleksa, saltHandAleksa, handAleksa);
    checkCommitment(commitResultAleksa, saltResultAleksa, resultAleksa);
    outcome = winner(handAleksa, handRuzica, resultAleksa, resultRuzica);
    continue;
  } //end of while

  assert(outcome == A_WINS || outcome == B_WINS);

  transfer(2 * amount).to(outcome == A_WINS ? Aleksa : Ruzica);
  commit();

  each([Aleksa, Ruzica], () => {
    interact.seeOutcome(outcome);
  });
});
