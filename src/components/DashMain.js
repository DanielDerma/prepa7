import React, { Component } from "react";
import "../dashboard.css";

export class DashMain extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <Sidebar />
            <Main />
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
            <a className="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Panel</strong> Aqui es donde los directivos pueden ver
        reflejadas las calificaiones subidas por los profes en el{" "}
        <a href="#" class="alert-link">
          SII
        </a>
        .
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div
        id="list-item"
        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
      >
        <h1 className="h2">Grafica Alumnos -@Directores</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-success active"
            >
              Public
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Private
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashMain;
