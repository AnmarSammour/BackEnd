const yargs = require("yargs");

const addCommand = require("./commands/add");
const deleteCommand = require("./commands/delete");
const listCommand = require("./commands/list");
const readCommand = require("./commands/read");

yargs
  .command(addCommand)
  .command(deleteCommand)
  .command(listCommand)
  .command(readCommand);

yargs.parse();
