import cowsay from "cowsay";

function createText(name) {
  return `Hello, ${name}!`;
}

async function main() {
  let temp = createText("World");
  console.log(cowsay.say({ text: temp }));
}

await main();
