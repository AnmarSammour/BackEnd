const Person = require('../models/person');

const listCommand = {
  command: 'list',
  describe: 'List all persons (full name + city)',
  builder: {
    simple: {
      describe: 'Show only full name and city',
      type: 'boolean',
      default: false
    }
  },
  handler: (argv) => {
    const persons = Person.getAll();
    if (persons.length === 0) {
      console.log('No persons found');
      return;
    }
    
    if (argv.simple) {
      console.log('List of persons (full name + city):');
      persons.forEach(person => {
        console.log(`${person.fname} ${person.lname} - ${person.city}`);
      });
    } else {
      console.log('List of all person details:');
      persons.forEach(person => {
        console.log('-------------------');
        console.log(`ID: ${person.id}`);
        console.log(`Full Name: ${person.fname} ${person.lname}`);
        console.log(`Age: ${person.age}`);
        console.log(`City: ${person.city}`);
      });
    }
  }
};

module.exports = listCommand;