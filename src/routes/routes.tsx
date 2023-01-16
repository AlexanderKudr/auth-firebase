import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { ErrorPage } from "../pages/ErrorPage";
import { Index } from "../pages/Index";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
