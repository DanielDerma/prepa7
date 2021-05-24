import React, { Component, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Header } from "./Header";
import { Db } from "./../components/Db";

import "../dashboard.css";

export class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Databaselayout />
          </div>
        </div>
      </div>
    );
  }
}

function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link " href="#mate">
              <span data-feather="file"></span>
              1A MATE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#fisica">
              <span data-feather="file"></span>
              1A FISICA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#aleman">
              <span data-feather="file"></span>
              1A ALEMAN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Databaselayout() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div
        className="alert alert-warning alert-dismissible fade show text-center"
        role="alert"
      >
        <strong>Modifica los correos y asigna permisos.</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <Db name="1A MATE" id="mate" />
    </main>
  );
}

export default Admin;
