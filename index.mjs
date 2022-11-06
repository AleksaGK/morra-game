import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAleksa = await stdlib.newTestAccount(startingBalance);
const accRuzica = await stdlib.newTestAccount(startingBalance);

const ctcAleksa = accAleksa.contract(backend);
const ctcRuzica = accRuzica.contract(backend, ctcAleksa.getInfo());

const HAND = [0, 1, 2, 3, 4, 5];
const RESULTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OUTCOME = ["Ruzica wins", "Draw", "Aleksa wins"];
const Player = (Who) => ({
  getHand: () => {
    const hand = Math.floor(Math.random() * 6);
    console.log(`${Who} played ${HAND[hand]}`);
    return hand;
  },
  getResult: () => {
    const result = Math.floor(Math.random() * 11);
    console.log(`${Who} expecting result: ${RESULTS[result]}`);
    return result;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
});

await Promise.all([
  ctcAleksa.p.Aleksa({
    ...Player("Aleksa"),
  }),
  ctcRuzica.p.Ruzica({
    ...Player("Ruzica"),
  }),
]);
