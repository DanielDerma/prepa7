import React, { Component, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Header } from "./Header";
import { Db } from "./../components/Db";

import "../dashboard.css";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px 0 24px 0",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>
          Arrartre o haga click a tus archivos csv o xlsx, tome encuenta las{" "}
          <u>Especificaciones del archivo.</u>
        </p>
      </div>
    </div>
  );
}

export class SIIMain extends Component {
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
            <a className="nav-link " href="#1a">
              <span data-feather="file"></span>
              Primer Semestre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span data-feather="file"></span>
              1b
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="#">
              <span data-feather="file"></span>
              2a
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span data-feather="file"></span>
              2b
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="#">
              <span data-feather="file"></span>
              3a
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span data-feather="file"></span>
              3b
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
        <strong>
          Suelta tu base de datos o da click para comenzar el seguimiento del
          curso.
        </strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <StyledDropzone />
      <Db name="1A MATE" />
      <Db name="1A FISICA" />
      <Db name="1A ALEMAN" />
    </main>
  );
}

export default SIIMain;
