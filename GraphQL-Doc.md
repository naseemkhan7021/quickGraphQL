# Data type
## 1 **Scalar** -  Stores a single value
- **Int** − Signed 32-bit Integer

- **Float** − Signed double precision floating point value

- **String** − UTF - 8-character sequence

- **Boolean** − True or false

- **ID** − A unique identifier, often used as a unique identifier to fetch an object or as the key for a cache.

**example**:
```graphql
     { greeting: String }
```      

## 2 **Object** - Shows what kind of object can be fetched
**example**:
```graphql
type Student {
     stud_id:ID
     firstname: String
     age: Int
     score:Float
},
type Query
{
     stud_details:[Student]
}
```

## 3 **Query** - Entry point type to other specific types
**example**:
```graphql
type Query  {
     greeting: String
}
```


## 4 **Mutation** -  Entry point for data manipulation
**example**:
```graphql
type Mutation {
     addStudent(firstName: String, lastName: String): Student
}
```

## 5 Enum -  Useful in a situation where you need the user to pick from a prescribed list of options
**example**:
```graphql
type Days_of_Week{
     SUNDAY
     MONDAY
     TUESDAY
     WEDNESDAY
     THURSDAY
     FRIDAY
     SATURDAY
}
```

# makeExecutableSchema Function Syntax
```graphql
import { makeExecutableSchema } from 'graphql-tools';

const jsSchema = makeExecutableSchema({
     typeDefs,
     resolvers, // optional
     logger, // optional
     allowUndefinedInResolve = false, // optional
     resolverValidationOptions = {}, // optional
     directiveResolvers = null, // optional
     schemaDirectives = null, // optional
     parseOptions = {}, // optional
     inheritResolversFromInterfaces = false // optional
});
```

sr no. | Parameter | Description
--- | --- | ---
1 | **typeDefs** | This is a required argument. It represents a GraphQL query as a UTF-8 string. 
2 | **Resolvers** | This is an optional argument (empty object by default). This has functions that handle the query.
3 | **logger** | This is an optional argument and can be used to print errors to the server console.
4 | **parseOptions** | This is an optional argument and allows customization of parse when specifying typeDefs as a string.
5 | **allowUndefinedInResolve** | This is true by default. When set to false, causes your resolve functions to throw errors if they return undefined.
6 | **resolverValidationOptions** | This is an optional argument and accepts an object with Boolean properties.
7 | **inheritResolversFromInterfaces** | This is an optional argument and accepts a Boolean argument to check resolvers object inheritance.
