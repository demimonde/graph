## API

The package is available by importing its default function:

```js
import graph from '@demimonde/graph'
```

%~%

```## graphGet
[
  ["path", "string"],
  ["token", "string"],
  ["params", "Object"],
  ["straight", "string"]
]
```

Makes the call to the get path that can either start or not start with `/`. The params will be converted to string using `querystring.stringify` in which the `access_token` will be embedded.

%~%

```## async graphPost => *
[
  ["path", "string"],
  ["token", "string"],
  ["params", "Object"]
]
```

Posts data to the edge.

%~%

```## async getUrl => *
[
  ["url", "string"],
  ["params?", "Object"]
]
```

Stringifies the params and returns the URL for GET request.

%~%

```## async exchange => string
[
  ["params", "{ client_id, redirect_uri, client_secret, code } "]
]
```

Exchanges the short-lived token for a long-lived token.

%~%


```## facebookDialogUrl => string
[
  ["params", "{ client_id, redirect_uri, state, scope } "]
]
```

Returns the Oauth URL to sign in into Facebook and allow the app permissions.

%~%