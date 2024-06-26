import cowsay from "cowsay";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Edward",
  "Fiona",
  "George",
  "Hannah",
  "Ivan",
  "Julia",
];

function randomElt(list) {
  return names[Math.floor(Math.random() * list.length)];
}

function createText(name) {
  return `Hello, ${name}!`;
}

async function main() {
  let temp = createText(randomElt(names));
  console.log(cowsay.say({ text: temp }));
}

await main();
