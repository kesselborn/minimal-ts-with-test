# Minimal TypeScript app

## What

Minimal template that checks the following things:

- written in TypeScript
- translated to JavaScript ESM
- JavaScript-Files can be started via node without flags
- testing works with jest
- commit hook that builds TypeScript before commiting

## Commands

... the usual:

    npm install # once
    npm start   # automatically builds ts -> js before hand

    npm test    # jest tests

    npm run prestart # just compile ts -> js

