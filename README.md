# Asciidoctor template for the AsyncAPI Generator
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Based on https://github.com/asyncapi/markdown-template

## Usage

```
ag asyncapi.yaml @michalmela/asyncapi-asciidoctor-template -o output
```

If you don't have the AsyncAPI Generator installed, you can install it like this:

```
npm install -g @asyncapi/generator
```
## Supported parameters

|Name|Description|Required|Default|Example|
|---|---|---|---|---|
|outFilename|The filename of the output file.|No|`asyncapi.md`|`index.md`|
|channelLabel|How you want to call _Channels_ in your output|No|`Channel`|`Topic`|

## Development

1. Make sure you have the latest generator installed `npm install -g @asyncapi/generator`.
2. Modify the template or it's helper functions. Adjust `test/spec/asyncapi.yml` to have more features if needed.
3. Generate output with watcher enables `npm run dev`.
4. Check generated markdown file located in `./test/output/asyncapi.md`.
