import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, Component }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);





    if (isAuthenticated === false) {
        return <Navigate to="/login" />
    }
    else if (isAdmin === true && user.role !== "admin") {
        return <Navigate to="/login" />
    }
    else {
        return (
            <Fragment>
                {loading === false && <Component />}
            </Fragment>
        )
    }





};

export default ProtectedRoute;
