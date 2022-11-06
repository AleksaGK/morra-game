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
  });
  const Ruzica = Participant("Ruzica", {
    ...Player,
  });

  init();

  Aleksa.only(() => {
    const handAleksa = declassify(interact.getHand());
    const resultAleksa = declassify(interact.getResult());
  });

  Aleksa.publish(handAleksa, resultAleksa);
  commit();

  Ruzica.only(() => {
    const handRuzica = declassify(interact.getHand());
    const resultRuzica = declassify(interact.getResult());
  });
  Ruzica.publish(handRuzica, resultRuzica);
  const outcome = winner(handAleksa, handRuzica, resultAleksa, resultRuzica);
  commit();

  each([Aleksa, Ruzica], () => {
    interact.seeOutcome(outcome);
  });
});
