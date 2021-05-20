import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const BtnOut = () => {
  const { logout } = useAuth0();
  //   return <button onClick={() => loginWithRedirect()}>Login</button>;
  return (
    <li>
      <a
        className="dropdown-item "
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        role="button"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </a>
    </li>
  );
};
