const chalk = require('chalk');
const log = console.log;

log(chalk.blue.underline.bold('Toddler Property Rules'));
log(chalk.green('If I like it,') + chalk.red(' it is mine.'));
log(chalk.magenta('If its in my hand,') + chalk.red(' it is mine.'));
log(chalk.cyan('If I can take it from you,') + chalk.red(' it is mine.'));
log(chalk.bgGreen('If I had it a little while ago,') + chalk.red(' it is mine.'));
log(chalk.bgRed('If it is mine') + chalk.blue(' it must never appear to be yours in any way.'));
log(chalk.yellow.inverse('If I am doing or building something,') + chalk.red(' all the pieces are mine. '));
log(chalk.bgCyan('If it looks just like mine,') + chalk.red(' it is mine.'));
log(chalk.underline('If I think it is mine') + chalk.red.underline(' it is mine.'));
