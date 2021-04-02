import React from "react";
import Labels from "./../labels";
export default function StepDash(props, v) {
  // v = steps or content
  if (v === "f") {
    return ["Nombres", "P1", "P2", "P3", "P4", "P5", "P6"];
  } else {
  }
  //   function getSteps() {

  //   }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Labels />; // apellidos y nombres
      case 1:
        return <Labels />; //p1
      case 2:
        return <Labels />; //p2
      case 3:
        return <Labels />; //p3
      case 4:
        return <Labels />; //p4
      case 5:
        return <Labels />; //p5
      case 6:
        return <Labels />; //p6
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label={props.name} />
    </form>
  );
}
