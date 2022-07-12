const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;

// register middeleware
app.use(bodyParser.json(), cors());

// GraphQL
const typeDefination = `
type Query {
     greeting:String
}`;
const resolverObject = {
     Query: {
          greeting: () => 'Hello GraphQL  From "hellow world apollo server" !!'
     }
};
const {makeExecutableSchema} = require('graphql-tools');
const schema = makeExecutableSchema({typeDefs:typeDefination,resolvers:resolverObject});

const {graphiqlExpress,graphqlExpress} = require('apollo-server-express');
app.use('/graphql',graphqlExpress({schema}));
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}));

app.get('/favicon.ico',(req,res)=>res.status(204)); // for handling favicon error on Browser

app.listen(port, () => console.info(`Server running on port -> ${port}`));