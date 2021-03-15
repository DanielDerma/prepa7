import React, { Component } from "react";
import { Scatter, defaults } from "react-chartjs-2";
// import random from "random";

defaults.global.maintainAspectRatio = false;

export class Chart extends Component {
  render() {
    const data = {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            {
              x: 5,
              y: 1,
            },
            {
              x: 5,
              y: 8,
            },
            {
              x: 50,
              y: 10,
            },
          ],
        },
      ],
      options: {
        scales: {
          xAxes: [
            {
              type: "linear",
              position: "bottom",
            },
          ],
        },
      },
    };
    return (
      <article className="canvas-container">
        <Scatter data={data} />
      </article>
    );
  }
}

function dataPoint() {}

// function DBList() {
//   return (
//     <>
//       {dataXlsx.map((xlsx) => {
//         const { ID, NC, Apellidos, Nombre, Grado, Grupo, Materia } = xlsx;
//         return (
//           // each rows
//           <tr>
//             <td>{ID}</td>
//             <td>{NC}</td>
//             <td>{Apellidos}</td>
//             <td>{Nombre}</td>
//           </tr>
//         );
//       })}
//     </>
//   );
// }

export default Chart;
