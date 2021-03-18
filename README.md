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


### Query example to test from GraphiQl:
- `query {
  greet(name: "CrgioPeca88")
  getTasks {
    _id
    title
    description
    completed
  }
}
`
- `mutation{
  createTask(input: {
    title: "To Sleep"
    description: "To Sleep description ... To Sleep... To Sleep"
    completed: false
  }) {
    _id
    title
  }
}`
