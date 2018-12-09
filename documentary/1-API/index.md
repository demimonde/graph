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

```## graphPost
[
  ["path", "string"],
  ["token", "string"],
  ["params", "Object"]
]
```

Posts data to the edge.

%~%