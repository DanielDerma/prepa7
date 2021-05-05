import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields({ nameL = "hi" }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label={nameL}
        // id="outlined-error"
        type="Number"
        InputProps={{
          inputProps: {
            max: 10,
            min: 0,
          },
        }}
      />
    </form>
  );
}

// export default function AddStepper() {

// }

// case 0:
//   return <Labels nameL="Apellidos" />; // apellidos y nombres
// case 1:
//   return <Labels nameL="Nombres" />; // apellidos y nombres
// case 2:
//   return <Labels nameL="Parcial 1" />; //p1
// case 3:
//   return <Labels nameL="Parcial 2" />; //p2
// case 4:
//   return <Labels nameL="Parcial 3" />; //p3
// case 5:
//   return <Labels nameL="Parcial 4" />; //p4
// case 6:
//   return <Labels nameL="Parcial 5" />; //p5
// case 7:
//   return <Labels nameL="Parcial 6" />; //p6
// default:
//   return "Unknown stepIndex";
