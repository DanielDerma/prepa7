import React, { Component } from "react";
import User from "./../components/User";

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
                {/*<li className="nav-item">
                  <a className="nav-link " href="sii">
                    SII
                  </a>
                </li> */}
              </ul>
              <form>
                <div className="btn-group dropstart">
                  <button
                    type="navbar-toggler"
                    className="btn btn-outline-secondary dropdown-toggle "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <User />
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
