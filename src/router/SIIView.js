import React, { Component, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Header } from "./Header";

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
  borderColor: "#2196f3", //green for ... files
};

const acceptStyle = {
  borderColor: "#2196f3", //blue for ok files
};

const rejectStyle = {
  borderColor: "#ff1744", //red for NO ok files
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

export class SIIView extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
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
      <div className="position-sticky pt-3"></div>
    </nav>
  );
}

function Databaselayout() {
  return (
    <main className="col-md-9 col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-3 border-bottom">
        <h1 className="h2">Ciclo 1</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="dropdown me-2"></div>
          <div class="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-danger">
            Reportar Error
          </button>
        </div>
      </div>
      <div className="">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NC</th>
                <th>Apellidos</th>
                <th>Nombres</th>
                <th>P1</th>
                <th>P2</th>
                <th>P3</th>
                <th>P4</th>
                <th>P5</th>
                <th>P6</th>
                <th>Promedio</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>NC</td>
                <td>Apellidos</td>
                <td>Nombre</td>
                <td>p1</td>
                <td>p2</td>
                <td>p3</td>
                <td>p4</td>
                <td>p5</td>
                <td>p6</td>
                <td>promedio</td>
              </tr>{" "}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default SIIView;
