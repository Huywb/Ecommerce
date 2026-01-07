import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./pages/Cart";
import AdminHome from "./admin/pages/AdminHome";
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import AdminUsers from "./admin/pages/AdminUsers";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminOrders from "./admin/pages/AdminOrders";
import Profile from "./pages/Profile";
import Order from "./pages/Order";

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
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "order",
          element: <Order />
        }
      ],
    },
    {
      path: '/admin',
      element: <LayoutAdmin />,
      children: [
        {
          index: true,
          element: <AdminHome />
        },
        {
          path: "users",
          element: <AdminUsers />
        },
        {
          path: "products",
          element: <AdminProducts />
        },
        {
          path: "orders",
          element: <AdminOrders />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
