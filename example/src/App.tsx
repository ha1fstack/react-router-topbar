import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import ReactRouterTopbar from "react-router-topbar";
import { suspend } from "suspend-react";

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
      { path: "", element: <RouteA /> },
      { path: "b", element: <RouteB /> },
      {
        path: "c",
        loader: async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return null;
        },
        element: <RouteC />,
      },
      {
        path: "d",
        loader: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return null;
        },
        element: <RouteD />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <ReactRouterTopbar />
      <div className="container max-w-sm mx-auto my-12">
        <nav className="mb-8">
          <ul className="flex space-x-2">
            <li>
              <Link
                to="/"
                className="bg-blue-500 text-white px-3 py-1.5 rounded"
              >
                None
              </Link>
            </li>
            <li>
              <Link
                to="/b"
                className="bg-blue-500 text-white px-3 py-1.5 rounded"
              >
                Suspense
              </Link>
            </li>
            <li>
              <Link
                to="/c"
                className="bg-blue-500 text-white px-3 py-1.5 rounded"
              >
                Loader
              </Link>
            </li>
            <li>
              <Link
                to="/d"
                className="bg-blue-500 text-white px-3 py-1.5 rounded"
              >
                Suspense+Loader
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

function RouteA() {
  return (
    <div>
      <h1 className="text-xl font-semibold">None</h1>
      <p>No delay</p>
    </div>
  );
}

function RouteB() {
  suspend(
    () => new Promise((resolve) => setTimeout(resolve, 2000)),
    [useLocation().key],
  );

  return (
    <div>
      <h1 className="text-xl font-semibold">Suspense</h1>
      <p>2000ms delay with suspense</p>
    </div>
  );
}

function RouteC() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Loader</h1>
      <p>2000ms delay with loader</p>
    </div>
  );
}

function RouteD() {
  suspend(
    () => new Promise((resolve) => setTimeout(resolve, 1000)),
    [useLocation().key],
  );

  return (
    <div>
      <h1 className="text-xl font-semibold">Suspense+Loader</h1>
      <p>1000ms delay with loader + 1000ms delay with suspense</p>
    </div>
  );
}
