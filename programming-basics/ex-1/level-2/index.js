import chalk from 'chalk';


console.log(chalk.green('This is a success message.'));
console.log(chalk.red('This is an error message.'));
console.log(chalk.blue('This is an info message.'));
console.log(chalk.yellow('This is a warning message.'));


console.log(chalk.bgBlue.white('This has a blue background and white text.'));
console.log(chalk.bgRed.black('This has a red background and black text.'));


console.log(chalk.bold('This is bold text.'));


console.log(chalk.underline('This is underlined text.'));


console.log(chalk.green.bold('This is green and bold.'));
console.log(chalk.bgCyan.black.underline('This is cyan background, black text, and underlined.'));


console.log(chalk.dim('This is dimmed text.'));


console.log(chalk.italic('This is italic text.'));


console.log(chalk.strikethrough('This is strikethrough text.'));


console.log(chalk.rgb(255, 0, 0)('This is red using RGB.'));
console.log(chalk.rgb(0, 255, 0)('This is green using RGB.'));
console.log(chalk.rgb(0, 0, 255)('This is blue using RGB.'));


console.log(chalk.hex('#ff6347')('This is tomato red using HEX color.'));
console.log(chalk.hex('#32cd32')('This is lime green using HEX color.'));
console.log(chalk.hex('#1e90ff')('This is dodger blue using HEX color.'));
