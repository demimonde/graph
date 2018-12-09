# @demimonde/graph

[![npm version](https://badge.fury.io/js/%40demimonde%2Fgraph.svg)](https://npmjs.org/package/@demimonde/graph)

`@demimonde/graph` is The Facebook Graph Methods To Get And Post Data Using Access Tokens.

```sh
yarn add -E @demimonde/graph
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`graphGet(path: string, token: string, params: Object, straight: string)`](#graphgetpath-stringtoken-stringparams-objectstraight-string-void)
- [`async graphPost(path: string, token: string, params: Object): *`](#async-graphpostpath-stringtoken-stringparams-object-)
- [`async getUrl(url: string, params?: Object): *`](#async-geturlurl-stringparams-object-)
- [`async exchange(params: { client_id, redirect_uri, client_secret, code } ): string`](#async-exchangeparams--client_id-redirect_uri-client_secret-code---string)
- [`facebookDialogUrl(params: { client_id, redirect_uri, state, scope } ): string`](#facebookdialogurlparams--client_id-redirect_uri-state-scope---string)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import graph from '@demimonde/graph'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `graphGet(`<br/>&nbsp;&nbsp;`path: string,`<br/>&nbsp;&nbsp;`token: string,`<br/>&nbsp;&nbsp;`params: Object,`<br/>&nbsp;&nbsp;`straight: string,`<br/>`): void`

Makes the call to the get path that can either start or not start with `/`. The params will be converted to string using `querystring.stringify` in which the `access_token` will be embedded.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `async graphPost(`<br/>&nbsp;&nbsp;`path: string,`<br/>&nbsp;&nbsp;`token: string,`<br/>&nbsp;&nbsp;`params: Object,`<br/>`): *`

Posts data to the edge.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `async getUrl(`<br/>&nbsp;&nbsp;`url: string,`<br/>&nbsp;&nbsp;`params?: Object,`<br/>`): *`

Stringifies the params and returns the URL for GET request.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## `async exchange(`<br/>&nbsp;&nbsp;`params: { client_id, redirect_uri, client_secret, code } ,`<br/>`): string`

Exchanges the short-lived token for a long-lived token.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true"></a></p>


## `facebookDialogUrl(`<br/>&nbsp;&nbsp;`params: { client_id, redirect_uri, state, scope } ,`<br/>`): string`

Returns the Oauth URL to sign in into Facebook and allow the app permissions.

```js
import { facebookDialogUrl } from '@demimonde/graph'

const url = facebookDialogUrl({
  client_id: '4hkajshd6f7t4ff',
  redirect_uri: 'http://localhost:4350',
  scope: 'manage_pages',
  state: Math.floor(Math.random() * 10000),
})

console.log(url)
```
```
https://www.facebook.com/v3.2/dialog/oauth?client_id=4hkajshd6f7t4ff&redirect_uri=http%3A%2F%2Flocalhost%3A4350&state=1318&scope=manage_pages
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/6.svg?sanitize=true"></a></p>

## Copyright

(c) [Demimonde][1] 2018

[1]: https://demimonde.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>