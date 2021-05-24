import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const BtnOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  //   return <button onClick={() => loginWithRedirect()}>Login</button>;
  return (
    <li className="nav-item">
      <a
        className="nav-link "
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </a>
    </li>
  );
};
