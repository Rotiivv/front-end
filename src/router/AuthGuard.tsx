import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

const AuthGuard = (isPrivate: AuthGuardProps) => {
  const signedIn = false; //localStorage.getItem("token");

  if (!signedIn && isPrivate) return <Navigate to="/login" />;
  if (signedIn && !isPrivate) return <Navigate to="/" />;

  return <Outlet />;
};

export default AuthGuard;
