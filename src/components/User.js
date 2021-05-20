import React from "react";
import { Auth0Provider, isAuthenticated } from "@auth0/auth0-react";
// const { user } = useAuth0(); // picture, name, (email)

function User() {
  return (
    <>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            <img
              src="http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg"
              alt="no picture"
            />
          </a>
        </li>
        {/* <!-- log in --> */}
        <li>
          <a className="dropdown-item" href="#">
            Luis Daniel Derma Rios
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
        {/* <li>
          <a className="dropdown-item active" href="sii">
            SII
          </a>
        </li>
        <li>
          <a className="dropdown-item active" href="alum">
            SII (alumno)
          </a>
        </li> */}
        <li>
          <a
            className="dropdown-item "
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            role="button"
          >
            Log out
          </a>
        </li>
      </ul>
    </>
  );
}
function AccoutInfo() {
  return <Auth0Provider></Auth0Provider>;
}

export default User;
