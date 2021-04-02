import React, { Component } from "react";
import { Bar, defaults } from "react-chartjs-2";
// import random from "random";

defaults.global.maintainAspectRatio = false;

export class Chart extends Component {
  render() {
    const data = {
      labels: dataGrafica(1),
      datasets: [
        {
          data: dataGrafica(0),
        },
      ],
    };
    return (
      <article className="canvas-container">
        <Bar data={data} />
      </article>
    );
  }
}
function dataGrafica(x) {
  if (x == 1) {
    return [
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
      "RAYA GARCIA",
    ];
  } else {
    return [
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
    ];
  }
}
export default Chart;
