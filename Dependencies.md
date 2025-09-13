[Back to README](./README.md)

# Dependencies

## path-to-regexp

```
pnpm install path-to-regexp -E

......
// -> Matching paths

import { match } from 'path-to-regexp'

const matcherUrl = match('/foo/:bar', { decodeURIComponent})
const mateched = matcherUrl('/foo/123')

// -> { path: '/foo/123', params: { bar: '123' } } or null
```

# Operate children

```
import { Children } from 'react';

const mappedChildren = Children.map(children, child =>
  <div className="Row">
    {child}
  </div>
);
```

# Lazy loading

```
import { lazy } from 'react'
const MyComponent = lazy(() => import('./path')) // -> dynamic import with lazy loading

...

// We need to specify to react that something is pending to be loaded.

<Suspense fallback={null} > <!-- this tag is used when using lazy and it uses a fallback to render something while loading component
  ...
  <MyComponent />
</Suspense>
```

# Testing

## `Terminal`

```
pnpm install vitest -D

```

## `package.json`

```
"scripts": {
  ...
  "test": "vitest" // -> add this line
}
```

> Create file like: file.**test**.jsx

## Render react components in tests

```
pnpm install happy-dom @testing-library/react -D
```

## Config vite

```
export default defineConfig({
  plugins: [react()],
  // add next block
  test: {
    environment: 'happy-dom'
  }
})
```
