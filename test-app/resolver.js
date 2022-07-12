const db = require('./db');

const Query = {
     // test: () => 'Test success, GraphQl server is up and running',
     greeting: () => {
          return "hello from  TutorialsPoint !!!"
     },
     students: () => db.students.list(),
     college: () => db.collages.list()
}
module.exports = { Query } 