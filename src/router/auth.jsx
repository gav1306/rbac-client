import { Navigate } from "react-router-dom";
import Login from "../modules/auth/pages/login";

const AuthRoutes = () => {
  const routes = [
    {
      index: true,
      element: <Navigate to={"login"} replace />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ];
  return routes;
};

export default AuthRoutes;
