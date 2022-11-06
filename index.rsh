"reach 0.1";

const winner = (handAleksa, handRuzica, resultAleksa, resultRuzica) => {
  if (resultAleksa == resultRuzica) {
    return 1;
  } else if (handAleksa + handRuzica == resultAleksa) {
    return 2;
  } else if (handAleksa + handRuzica == resultRuzica) {
    return 0;
  } else {
    return 1;
  }
};

const Player = {
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
    const handAleksa = declassify(interact.getHand());
    const resultAleksa = declassify(interact.getResult());
  });

  Aleksa.publish(handAleksa, resultAleksa, amount).pay(amount);
  commit();

  Ruzica.only(() => {
    interact.acceptWager(amount);
    const handRuzica = declassify(interact.getHand());
    const resultRuzica = declassify(interact.getResult());
  });
  Ruzica.publish(handRuzica, resultRuzica).pay(amount);

  const outcome = winner(handAleksa, handRuzica, resultAleksa, resultRuzica);

  const [forAleksa, forRuzica] =
    outcome == 2 ? [2, 0] : outcome == 0 ? [0, 2] : [1, 1];

  transfer(forAleksa * amount).to(Aleksa);
  transfer(forRuzica * amount).to(Ruzica);

  commit();

  each([Aleksa, Ruzica], () => {
    interact.seeOutcome(outcome);
  });
});
