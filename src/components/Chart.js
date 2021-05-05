import React, { Component } from "react";
import { Bar, defaults } from "react-chartjs-2";
import Example from "./Modal";

defaults.global.maintainAspectRatio = false;

export class Chart extends Component {
  render() {
    const data = {
      // labels: dataGrafica(1),
      labels: ["RAYA GARCIA 202065", "MARCOS ANTONIO", "ALICANTE DE MURCIA"],
      datasets: [
        {
          // data: dataGrafica(0),
          data: [80, 80, 80],
        },
      ],
    };
    return (
      <article className="canvas-container">
        <Bar
          data={data}
          onElementsClick={(elem) => {
            // console.log(elem[0]._model.label);
            if (elem.hasOwnProperty(0)) {
              console.log("data");
            } else {
              console.log("no data");
            }
            // console.log(elem[0].hasOwnProperty(_model));
          }}
        />
      </article>
    );
  }
}
export default Chart;
