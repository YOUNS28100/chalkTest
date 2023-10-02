import chalk from "chalk";

const wilders = ["Thierry", "Quentin", "JF", "Pierrick" ];
const [w1, w2, w3, w4] = wilders;

console.log(`The Legendary Crew with ${chalk.redBright(w1)}, ${chalk.blueBright(w2)}, ${chalk.greenBright(w3)} and finally ${chalk.whiteBright(w4)}.`)



