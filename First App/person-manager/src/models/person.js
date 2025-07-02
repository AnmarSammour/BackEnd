const { readData, writeData } = require('../utils/fileUtils');

class Person {
  static add(person) {
    const persons = readData();
    
    const duplicate = persons.find(p => p.id === person.id);
    if (duplicate) {
      throw new Error('Duplicate ID found');
    }
    
    if (persons.length >= 10) {
      throw new Error('Maximum limit of 10 persons reached');
    }
    
    persons.push(person);
    writeData(persons);
    return person;
  }

  static delete(id) {
    const persons = readData();
    const updatedPersons = persons.filter(p => p.id !== id);
    writeData(updatedPersons);
    return { deleted: persons.length - updatedPersons.length };
  }

  static deleteAll() {
    writeData([]);
    return { deleted: 'all' };
  }

  static getById(id) {
    const persons = readData();
    return persons.find(p => p.id === id);
  }

  static getAll() {
    return readData();
  }
}

module.exports = Person;