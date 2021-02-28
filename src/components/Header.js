import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
          aria-label="Eighth navbar example"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              PREPA 7
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link " href="dashboard">
                    Panel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="sii">
                    SII
                  </a>
                </li> */}
              </ul>
              <form>
                <div className="btn-group dropstart">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Daniel
                  </button>
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
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
