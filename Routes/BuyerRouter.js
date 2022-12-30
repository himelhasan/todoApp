import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../Context/AuthProvider";
import useBuyer from "../hooks/useBuyer";

const BuyerRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
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

  if (user && isBuyer) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <Navigate to="/login" state={{ from: location }} replace={true} />
      </div>
    );
  }
};

export default BuyerRouter;
