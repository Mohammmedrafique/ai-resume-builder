import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
