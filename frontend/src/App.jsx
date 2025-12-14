import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./pages/Cart";

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
          path: "products/:name",
          element: <Products />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
