# graphql-me-experiments
Graphql - ExpressJs - MongoDB*Mongoose -  experiments

## Local Run (Babel)
After cloning, go to the root folder and run:
- `npm install`
- `npm start`

## Compiling Files (Babel) and Run them (Node).
- `npm install`
- `npm run build`
- `npm run build-serve`


### Queries example to test from GraphiQl:
```
query {
  greet(name: "CrgioPeca88")
  getTasks {
    _id
    title
    description
    completed
  }
  getUsers{
    _id
    firstname
    lastname
    nickname
    email
  }
}
```
```
mutation{
  createTask(input: {
    title: "To Sleep"
    description: "To Sleep description ... To Sleep... To Sleep"
    completed: false
  }) {
    _id
    title
  }
  createUser(input: {
    firstname: "Crgio"
    lastname: "Peca"
    email: "crgiopeca@graphql.com"
    nickname: "CrgioPeca88"
  }) {
    _id
    email
    nickname
  }
  deleteUser(_id: "XxXxXXXxXxXxXx"){
    _id
    firstname
    nickname
  }
  updateUser(
    _id: "XxXxXXXxXxXxXx",
    input: {
      firstname: "CrgioU"
      email: "crgioupdate@graphql.com"
      nickname: "CrgioPeca88U"
    }
  ) {
    _id
    firstname
    lastname
    email
    nickname
  }
}
```
