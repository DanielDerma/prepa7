import React, { Component } from "react";
import { Header } from "./Header";
import "../dashboard.css";

// import Example, { handleShow } from "../components/infoStepper/Modal";
import Example, { handleShow } from "../components/Modal";

import Chart from "../components/Chart";

export class DashMain extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container-fluid">
          <div class="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>Aqui se muestra la data</strong> Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <Data />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

function Data() {
  return (
    <>
      <div
        id="list-item"
        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
      >
        <h1 className="h2">Grafica Alumnos -@Directores</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="dropdown me-2">
            <Example name="Editar Vista" />
          </div>
          <div class="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
        </div>
      </div>
      <Chart />
      <Example name="" />
    </>
  );
}

function RegistroCiclos() {
  return (
    <>
      <li>
        <a className="dropdown-item" href="#">
          <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
        </a>
      </li>
    </>
  );
}

// function DBList() {
//   return (
//     <>
//       {dataEli.map((xlsx) => {
//         const { ID } = xlsx;
//         return (
//           // each rows
//           <tr>
//             <td>{ID}</td>
//           </tr>
//         );
//       })}
//     </>
//   );
// }

let registro = {
  ciclos: [
    "Periodo 1",
    "Periodo 2",
    "Periodo 3",
    "Periodo 4",
    "Periodo 5",
    "Periodo 6",
    "Periodo 7",
    "Periodo 8",
    "Periodo 9",
  ],
  maestros: ["Eli", "Alonso", "Marquez"],
  gradoGrupo: [
    "Periodo 1",
    "Periodo 2",
    "Periodo 3",
    "Periodo 4",
    "Periodo 5",
    "Periodo 6",
    "Periodo 7",
    "Periodo 8",
    "Periodo 9",
  ],
};

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

export default DashMain;
