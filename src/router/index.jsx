import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthRoutes from "./auth";
import AuthLayout from "../layouts/auth";
import StoreProvider from "../provider";
import UserRoutes from "./user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreProvider />,
    children: [
      {
        index: true,
        element: <Navigate to={"auth"} replace />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: AuthRoutes(),
      },
      {
        path: "user",
        children: UserRoutes(),
      },
    ],
  },
]);

export default router;
