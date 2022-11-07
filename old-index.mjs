import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAleksa = await stdlib.newTestAccount(startingBalance);
const accRuzica = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAleksa = await getBalance(accAleksa);
const beforeRuzica = await getBalance(accRuzica);

const ctcAleksa = accAleksa.contract(backend);
const ctcRuzica = accRuzica.contract(backend, ctcAleksa.getInfo());

const HAND = [0, 1, 2, 3, 4, 5];
const RESULTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OUTCOME = ["Aleksa wins", "Draw", "Ruzica wins"];
const Player = (Who) => ({
  ...stdlib.hasRandom,
  getHand: () => {
    const hand = Math.floor(Math.random() * 2);
    console.log(`${Who} played ${HAND[hand]}`);
    return hand;
  },
  getResult: () => {
    const result = Math.floor(Math.random() * 3);
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
    wager: stdlib.parseCurrency(5),
  }),
  ctcRuzica.p.Ruzica({
    ...Player("Ruzica"),
    acceptWager: (amt) => {
      console.log(`Ruzica accepts the wager of ${fmt(amt)}.`);
    },
  }),
]);

const afterAleksa = await getBalance(accAleksa);
const afterRuzica = await getBalance(accRuzica);

console.log(`Aleksa went from ${beforeAleksa} to ${afterAleksa}.`);
console.log(`Ruzica went from ${beforeRuzica} to ${afterRuzica}.`);
