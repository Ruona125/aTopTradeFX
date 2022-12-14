import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      display: "flex",
    },
  },
  input: {
    color: "fff",
  },
}));

const Withdrawal = () => {
  const classes = useStyles();
  return (
    <div style={{ alignItems: "center" }}>
      <center>
        <h1>WithDrawal</h1>
        <div>
          <form
            // style={{ display: "inline-block" }}
            className={classes.root}
            noValidate
            autoComplete="off">
            <TextField
              id="outlined-basic"
              color="red"
              inputProps={{ style: { color: "#fff" } }}
              label="Bank Name"
              variant="outlined"
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              variant="outlined"
              id="outlined-basic"
              label="Bank Account Number"
              inputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              id="outlined-basic"
              label="Wallet Address"
              variant="outlined"
              inputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "gold" } }}
            />
          </form>
        </div>
      </center>
    </div>
  );
};

export default Withdrawal;
