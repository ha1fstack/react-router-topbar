# React Router Topbar

### Top Loading Bar component for React Router v6, that just works.

- made using [NProgress](https://ricostacruz.com/nprogress/).
- supports **data route with loader**
- supports **future.v7_startTransition**

See the [demo](https://react-router-topbar.vercel.app/) for detail.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/react-router-topbar)
[![NPM Downloads](https://img.shields.io/npm/dm/react-router-topbar?&style=flat-square)](https://www.npmjs.com/package/react-router-topbar)

## Install

```bash
npm install react-router-topbar
pnpm install react-router-topbar
yarn add react-router-topbar
```

## Usage

Place the topbar component inside your router's root component.

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactRouterTopbar from "react-router-topbar";

function App() {
  return (
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  );
}
export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      ...
    ],
  },
]);

function Root() {
  return (
    <>
      <ReactRouterTopbar />
      ...
    </>
  );
}
```

### Default Configuration

If no props are passed to `<ReactRouterTopbar />`, below is the default configuration applied.

```jsx
<ReactRouterTopbar
  color="#2299DD"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
```

- `color`: to change the default color of TopLoader.
- `initialPosition`: to change initial position for the TopLoader in percentage, : `0.08 = 8%`.
- `crawlSpeed`: increment delay speed in `ms`.
- `speed`: animation speed for the TopLoader in `ms`
- `easing`: animation settings using easing (a CSS easing string).
- `height`: height of TopLoader in `px`.
- `crawl`: auto incrementing behavior for the TopLoader.
- `showSpinner`: to show spinner or not.
- `shadow`: a smooth shadow for the TopLoader. (set to `false` to disable it)
- `template`: to include custom HTML attributes for the TopLoader.
- `zIndex`: defines zIndex for the TopLoader.
- `showAtBottom`: To show the TopLoader at bottom. (increase height for the TopLoader to ensure it's visibility at the mobile devices)

#### `ReactRouterTopbarProps` (props passed to the TopLoader)

| **Name**          | **Type**          | **Default Value**                                                                                                                       |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `color`           | `string`          | `"#2299DD"`                                                                                                                             |
| `initialPosition` | `number`          | `0.08`                                                                                                                                  |
| `crawlSpeed`      | `number`          | `200`                                                                                                                                   |
| `height`          | `number`          | `3`                                                                                                                                     |
| `crawl`           | `boolean`         | `true`                                                                                                                                  |
| `showSpinner`     | `boolean`         | `true`                                                                                                                                  |
| `easing`          | `string`          | `"ease"`                                                                                                                                |
| `speed`           | `number`          | `200`                                                                                                                                   |
| `shadow`          | `string \| false` | `"0 0 10px #2299DD,0 0 5px #2299DD"`                                                                                                    |
| `template`        | `string`          | `"<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>"` |
| `zIndex`          | `number`          | `1600`                                                                                                                                  |
| `showAtBottom`    | `boolean`         | `false`                                                                                                                                 |

## License

MIT.

Basic structure from [Nextjs Toploader](https://github.com/TheSGJ/nextjs-toploader).
