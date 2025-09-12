import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import Login from "../view/pages/Login";
import Register from "../view/pages/Register";

const router = createBrowserRouter([
  {
    element: <AuthGuard isPrivate={true} />,
    path: "/dashboard",
    children: [
      {
        index: true,
        element: <h1>Dashboard</h1>,
      },
      {
        path: "tasks",
        element: <h1>Todas as tarefas</h1>,
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
