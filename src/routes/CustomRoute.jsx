import { useContext } from "react";
import { Navigate } from "react-router";

import { AuthContext } from "../context/Auth/AuthContext";
import BackdropLoading from "../components/BackdropLoading";

const CustomRoute = ({ component: Component, isPrivate = false, ...rest }) => {
  const { isAuth, loading } = useContext(AuthContext);

  if (!isAuth && isPrivate) {
    return (
      <>
        {loading && <BackdropLoading />}
        <Navigate to="/login" state={{from: rest.location}} />
      </>
    );
  }

  if (isAuth && !isPrivate) {
    return (
      <>
        {loading && <BackdropLoading />}
        <Navigate to="/" state={{from: rest.location}} />
      </>
    );
  }

  return (
    <>
      {loading && <BackdropLoading />}
      {Component}
    </>
  );
};

export default CustomRoute;
