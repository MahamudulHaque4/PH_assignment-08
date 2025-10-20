import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Products from "../Pages/Products";

// Helper function to add loading delay
const loaderWithDelay = (loaderFn, delay = 500) => {
  return async (...args) => {
    const [result] = await Promise.all([
      loaderFn(...args),
      new Promise(resolve => setTimeout(resolve, delay))
    ]);
    return result;
  };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: loaderWithDelay(() => fetch("/hero.json")),
      },

      {
        path: "/products",
        element: <Products></Products>,
        loader: loaderWithDelay(() => fetch("/hero.json")),
      },
      {
        path: "/app/:id",
        element: <AppDetails></AppDetails>,
        loader: loaderWithDelay(({ params }) => 
          fetch("/hero.json")
            .then(res => res.json())
            .then(data => data.find(app => app.id === parseInt(params.id)))
        ),
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
        loader: loaderWithDelay(() => Promise.resolve(null), 300),
      },
      {
        // Catch-all route for 404 errors
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },

]);
export default router;