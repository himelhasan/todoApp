import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Collections from "../Pages/Collections/Collections";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBookings from "../Pages/Dashboard/AllBookings";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import UpdateAccountInfo from "../Pages/MyProfile/UpdateAccountInfo/UpdateAccountInfo";
import Register from "../Pages/Register/Register";
import AdminRouter from "./AdminRouter";
import PrivateRouter from "./PrivateRouter";
import SellerRouter from "./SellerRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch(`https://bechedaw-server.vercel.app/category/`);
        },
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(`https://bechedaw-server.vercel.app/category/${params.id}`);
        },
        element: (
          <PrivateRouter>
            <CategoryPage />{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/collections",
        loader: () => {
          return fetch("https://bechedaw-server.vercel.app/allProducts");
        },
        element: (
          <PrivateRouter>
            <Collections />
          </PrivateRouter>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      { path: "/dashboard", element: <UpdateAccountInfo /> },
      { path: "/dashboard/myBookings", element: <MyOrders /> },
      { path: "/dashboard/allBookings", element: <AllBookings /> },
      { path: "/dashboard/updateProfile", element: <UpdateAccountInfo /> },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRouter>
            <AddProduct />
          </SellerRouter>
        ),
      },
      {
        path: "/dashboard/my-product",
        element: (
          <SellerRouter>
            {" "}
            <MyProducts />
          </SellerRouter>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRouter>
            {" "}
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRouter>
            {" "}
            <AllSellers></AllSellers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRouter>
            {" "}
            <AllBuyers />
          </AdminRouter>
        ),
      },
    ],
  },
]);

export default routes;
