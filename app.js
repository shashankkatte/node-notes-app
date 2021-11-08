const chalk = require('chalk');
const getNotes = require('./notes.js');

const command = !process.argv[2] ? null : process.argv[2];
console.log(command);

if (String(command).toUpperCase() === 'ADD') {
  console.log(chalk.blueBright('Adding new note!'));
}
