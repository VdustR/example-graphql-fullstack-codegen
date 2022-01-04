# A TypeScript Fullstack GraphQL CodeGen Example

This example will show you how to dev with typescript fullstack with GraphQL Code Generator.

## Tech Stack

- Language: [TypeScript](https://github.com/microsoft/TypeScript)
- Package Manager: [pnpm](https://github.com/pnpm/pnpm)
- Client
  - [vite](https://github.com/vitejs/vite): Dev Server / Bundler
  - [react](https://github.com/facebook/react): Frontend Component Library
  - [react-query](https://github.com/tannerlinsley/react-query): Fetching library integrated with React
  - [axios](https://github.com/axios/axios): HTTP Client
- Server:
  - [apollo-server-core](https://www.npmjs.com/package/apollo-server-core): GraphQL server
  - [fastify](https://github.com/fastify/fastify): HTTP server
  - [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
  - [ts-node](https://github.com/TypeStrong/ts-node), [ts-node-dev](https://github.com/wclr/ts-node-dev): TypeScript execution and REPL for node.js

## Setup

Install dependencies:

```sh
pnpm i
```

## Development

Opening [repo.code-workspace](./repo.code-workspace) with [vscode](https://github.com/microsoft/vscode) is recommended.

Run apollo dev server:

```sh
# From repository root directory.
cd packages/apollo
pnpm dev
```

Start the frontend server:

```sh
# From repository root directory.
cd packages/app
pnpm dev
```

Check <http://localhost:3000/>

Modify [schema.graphql](./schema.graphql) or [query.graphql](./query.graphql) and execute the command to regenerate the resolver type and the query functions:

```sh
pnpm generate
```

## Production

Build static frontend app:

```sh
# From repository root directory.
cd packages/app
pnpm build
```

Start the server:

```sh
# From repository root directory.
cd packages/apollo
pnpm start
```

Check <http://localhost:4000/>

## License

- Code: [`mit`](./LICENSE)
- README: [`cc-by-sa-4.0`](https://creativecommons.org/licenses/by-sa/4.0/)
