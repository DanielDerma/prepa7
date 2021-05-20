import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Nombre" />
        <TextField required id="standard-required" label="Apellidos" />
        <TextField
          id="standard-number"
          label="P1"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
        <TextField
          id="standard-number"
          label="P2"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
        <TextField
          id="standard-number"
          label="P3"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
        <TextField
          id="standard-number"
          label="P4"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
        <TextField
          id="standard-number"
          label="P5"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
        <TextField
          id="standard-number"
          label="P6"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
      </div>
    </form>
  );
}
