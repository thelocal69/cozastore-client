import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ Component }) => {
  const auth = useSelector();
  return auth ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoutes;
