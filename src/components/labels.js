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
        // variant="3"
      />
    </form>
  );
}
