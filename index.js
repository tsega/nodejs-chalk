const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.blue('What is your name? '), (answer) => {
  console.log(chalk.green(`${answer}, welcome to the wonderful world of Node.js`));

  rl.close();
});
