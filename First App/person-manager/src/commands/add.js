const Person = require('../models/person');

const addCommand = {
  command: 'add',
  describe: 'Add a new person',
  builder: {
    id: {
      describe: 'Person ID',
      demandOption: true,
      type: 'number'
    },
    fname: {
      describe: 'First name',
      demandOption: true,
      type: 'string'
    },
    lname: {
      describe: 'Last name',
      demandOption: true,
      type: 'string'
    },
    age: {
      describe: 'Age',
      demandOption: true,
      type: 'number'
    },
    city: {
      describe: 'City',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    try {
      const person = Person.add({
        id: argv.id,
        fname: argv.fname,
        lname: argv.lname,
        age: argv.age,
        city: argv.city
      });
      console.log('Person added successfully:', person);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
};

module.exports = addCommand;