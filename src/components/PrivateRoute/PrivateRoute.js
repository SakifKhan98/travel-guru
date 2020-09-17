import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (children, ...rest) => {
  return (
    <h1>This is Protected</h1>
    // <Route
    //   {...rest}
    //   render={({ location }) =>
    //     fakeAuth.isAuthenticated ? (
    //       children
    //     ) : (
    //       <Redirect
    //         to={{
    //           pathname: "/login",
    //           state: { from: location },
    //         }}
    //       />
    //     )
    //   }
    // />
  );
};

export default PrivateRoute;
