const parser = require("prettier-plugin-csharp")
const prettier = require("prettier/standalone")
const parserGraphql = require("prettier/parser-graphql")

// this works
const cs = prettier.format("using System ;", {
  parser: "cs",
  plugins: [parser]
});

console.assert(cs == "using System;\n", "csharp formatting did not work")
console.log(cs)

// this works
const graphql = prettier.format("{hero }", {
    parser: "graphql",
    plugins: [parserGraphql]
});

console.assert(graphql == "{\n  hero\n}\n", "graphl formatting did not work")
console.log(graphql)
