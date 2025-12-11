import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "products/:name",
          element: <Home />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
