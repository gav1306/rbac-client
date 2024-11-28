import { Navigate } from "react-router-dom";
import List from "../modules/user/pages/list";

const UserRoutes = () => {
  const routes = [
    {
      index: true,
      element: <Navigate to={"list"} replace />,
    },
    {
      path: "list",
      element: <List />,
    },
  ];
  return routes;
};

export default UserRoutes;
