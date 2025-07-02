const Person = require('../models/person');

const deleteCommand = {
  command: 'delete',
  describe: 'Delete a person or all persons',
  builder: {
    id: {
      describe: 'Person ID to delete',
      type: 'number'
    },
    all: {
      describe: 'Delete all persons',
      type: 'boolean',
      default: false
    }
  },
  handler: (argv) => {
    if (argv.all) {
      const result = Person.deleteAll();
      console.log('All persons deleted:', result);
    } else if (argv.id) {
      const result = Person.delete(argv.id);
      if (result.deleted > 0) {
        console.log('Person deleted successfully');
      } else {
        console.log('Person not found');
      }
    } else {
      console.log('Please specify --id or --all');
    }
  }
};

module.exports = deleteCommand;