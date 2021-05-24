import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
// const { user } = useAuth0(); // picture, name, (email)

function User() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    console.log("it is " + isAuthenticated);
  } else {
    console.log("it is ELSE" + isAuthenticated);
  }
  console.log(isAuthenticated);
  return (
    <ul className="dropdown-menu">
      <Auth0Provider
        domain="dev-qtg-buar.us.auth0.com"
        clientId="kzM5sdN82IZuzoTWxPJAHxMk4KQUtyOF"
        redirectUri={window.location.origin}
      >
        <AccoutInfo />
        <LogOut />
        <LogIn />
      </Auth0Provider>
    </ul>
  );
}

function AccoutInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <li>
          <a className="dropdown-item" href="#">
            <img src={user.picture} alt="no picture" />
          </a>
        </li>
        {/* <!-- log in --> */}
        <li>
          <a className="dropdown-item" href="#">
            {user.name}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Maestro
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item active" href="dashboard">
            Panel
          </a>
        </li>
      </>
    );
  } else {
    return null;
  }
}

function LogIn() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <li>
        <a
          className="dropdown-item "
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          role="button"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </a>
      </li>
    );
  } else {
    return null;
  }
}

function LogOut() {
  const { logout, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
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
  } else {
    return null;
  }
}
export default User;
