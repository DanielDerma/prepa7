import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { BtnIn } from "../Admin/LogIn";
import { BtnOut } from "../Admin/LogOut";
function User() {
  const { user, isAuthenticated } = useAuth0();
  const yess = () => {
    {
      if (isAuthenticated) {
        console.log("it is");
      } else {
        console.log("not is");
      }
    }
  };
  return (
    <Auth0Provider
      domain="dev-qtg-buar.us.auth0.com"
      clientId="kzM5sdN82IZuzoTWxPJAHxMk4KQUtyOF"
      redirectUri={window.location.origin}
    >
      {yess}
    </Auth0Provider>
  );
}

function Picture({ user }) {
  return (
    <li>
      <a className="dropdown-item">
        <img src={user.picture} alt="no picture" />
      </a>
    </li>
  );
}

function Nl() {
  return (
    <li>
      <a className="dropdown-item">NL: 23232323</a>
    </li>
  );
}

function Roles() {
  return (
    <li>
      <a className="dropdown-item">Maestro</a>
    </li>
  );
}
function Plataform() {
  return (
    <li>
      <a className="dropdown-item active" href="dashboard">
        Panel
      </a>
    </li>
  );
}

export default User;
