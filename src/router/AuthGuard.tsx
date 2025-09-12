import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

const AuthGuard = ({ isPrivate }: AuthGuardProps) => {
  const signedIn = !!localStorage.getItem("accessToken");

  if (!signedIn && isPrivate) return <Navigate to="/login" replace />;
  if (signedIn && !isPrivate) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default AuthGuard;
