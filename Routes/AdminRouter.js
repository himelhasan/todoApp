import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/UseAdmin";

const AdminRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
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

  if (user && isAdmin) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <Navigate to="/login" state={{ from: location }} replace={true} />
      </div>
    );
  }
};

export default AdminRouter;
