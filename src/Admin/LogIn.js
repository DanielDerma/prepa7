import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const BtnIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const btnlogin = () => {
    if (isAuthenticated) {
      return <></>;
    } else {
      return (
        <li className="nav-item">
          <a className="nav-link " onClick={() => loginWithRedirect()}>
            Log in
          </a>
        </li>
      );
    }
  };
  //   return <button onClick={() => loginWithRedirect()}>Login</button>;
  return <btnlogin />;
};
