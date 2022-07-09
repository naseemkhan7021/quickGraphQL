const { DataStore } = require('notarealdb');

const store = new DataStore('./data.json');

module.exports = {
     students:store.collection('students'),
     collages:store.collection('colleges')
}