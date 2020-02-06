import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// this crashes at compile time
// import parser from "prettier-plugin-csharp"
// import prettier from "prettier/standalone"
// import parserGraphql from "prettier/parser-graphql"

// does not make a difference
const parser = require("prettier-plugin-csharp")
// using only prettier and parserGraphql works
const prettier = require("prettier/standalone")
const parserGraphql = require("prettier/parser-graphql")

// this is never executed
const cs = prettier.format("using System ;", {
  parser: "cs",
  plugins: [parser]
});

console.assert(cs == "using System;\n", "csharp formatting did not work")
console.log(cs)

const graphql = prettier.format("{hero }", {
    parser: "graphql",
    plugins: [parserGraphql]
  });

console.assert(graphql == "{\n  hero\n}\n", "graphl formatting did not work")
console.log(graphql)


ReactDOM.render(<h1>hello world</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
