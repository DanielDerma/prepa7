import React from "react";

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
            NL: 23232323
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
        <li>
          <a className="dropdown-item active" href="sii">
            SII
          </a>
        </li>
        <li>
          <a className="dropdown-item active" href="alum">
            SII (alumno)
          </a>
        </li>
        {/* <!-- NO log  --> */}
        <li>
          <a
            className="dropdown-item "
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            role="button"
          >
            Create Account
          </a>
        </li>
        <li>
          <a
            className="dropdown-item "
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            role="button"
          >
            Sign in
          </a>
        </li>
        <li>
          <a
            className="dropdown-item "
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            role="button"
          >
            Sign out
          </a>
        </li>
      </ul>
    </>
  );
}

export default User;
