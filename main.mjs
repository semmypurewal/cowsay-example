import cowsay from "cowsay";

async function main() {
  console.log(cowsay.say({ text: "hello world" }));
}

await main();
