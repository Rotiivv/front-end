import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import Login from "../view/pages/Login";
import Register from "../view/pages/Register";
import Tasks from "../view/pages/Tasks";
import AddTask from "../view/pages/AddTask";
import Dashboard from "../view/pages/Dashboard";

const router = createBrowserRouter([
  {
    element: <AuthGuard isPrivate={true} />,
    path: "/",
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "tasks/new",
        element: <AddTask />,
      },
    ],
  },

  {
    element: <AuthGuard isPrivate={false} />,
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
