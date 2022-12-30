import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <HashLoader
        color="#D2AE6D"
        cssOverride={{
          margin: "0 auto",
          padding: "30vh 5vw",
        }}
      />
    );
  }

  if (user) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <Navigate to="/login" state={{ from: location }} replace={true} />
      </div>
    );
  }
};

export default PrivateRouter;
