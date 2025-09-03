import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "./AuthGuard";

const router = createBrowserRouter([
  {
    element: <AuthGuard isPrivate={true} />,
    path: "/",
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
    element: <AuthGuard isPrivate={true} />,
    path: "/",
    children: [
      {
        element: <h1>AuthLayout</h1>,
        children: [
          {
            element: <h1>login</h1>,
            path: "login",
          },
          {
            element: <h1>register</h1>,
            path: "register",
          },
        ],
      },
    ],
  },
]);

export default router;
