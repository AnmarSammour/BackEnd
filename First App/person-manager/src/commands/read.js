const Person = require('../models/person');

const readCommand = {
  command: 'read',
  describe: 'Read a specific person',
  builder: {
    id: {
      describe: 'Person ID',
      demandOption: true,
      type: 'number'
    }
  },
  handler: (argv) => {
    const person = Person.getById(argv.id);
    if (person) {
      console.log('Person details:');
      console.log('-------------------');
      console.log(`ID: ${person.id}`);
      console.log(`Full Name: ${person.fname} ${person.lname}`);
      console.log(`Age: ${person.age}`);
      console.log(`City: ${person.city}`);
    } else {
      console.log('Person not found');
    }
  }
};

module.exports = readCommand;