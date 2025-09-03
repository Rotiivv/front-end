import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

const AuthGuard = ({ isPrivate }: AuthGuardProps) => {
  const signedIn = false; //localStorage.getItem("token");

  if (!signedIn && isPrivate) return <Navigate to="/login" replace />;
  if (signedIn && !isPrivate) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default AuthGuard;
