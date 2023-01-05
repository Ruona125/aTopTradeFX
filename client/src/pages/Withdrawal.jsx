import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
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
  const [bank_name, setBankName] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [wallet_address, setWalletAddress] = useState("");
  const [withdrawal, setWithdrawal] = useState("");

  let userId = sessionStorage.getItem("id");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: userId,
      bank_name: bank_name,
      account_number: account_number,
      wallet_address: wallet_address,
    };
    const url = "http://localhost:8000/user/bank";
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    try {
      let res = await axios.post(url, data, { headers });
      if (res.status === 200) {
        setBankName("");
        setAccountNumber("");
        setWalletAddress("");
      } else {
        setWithdrawal("error sending data");
      }
    } catch (err) {
      setWithdrawal("error sending data");
    }
  };
  return (
    <div style={{ alignItems: "center" }}>
      <center>
        <h1>WithDrawal</h1>
        <div>
          <form
            // style={{ display: "inline-block" }}
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off">
            <TextField
              id="outlined-basic"
              color="red"
              inputProps={{ style: { color: "#fff" } }}
              label="Bank Name"
              variant="outlined"
              value={bank_name}
              onChange={(e) => setBankName(e.target.value)}
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              variant="outlined"
              id="outlined-basic"
              label="Bank Account Number"
              value={account_number}
              onChange={(e) => setAccountNumber(e.target.value)}
              inputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              id="outlined-basic"
              label="Wallet Address(optional)"
              variant="outlined"
              helperText="(optional)"
              value={wallet_address}
              onChange={(e) => setWalletAddress(e.target.value)}
              inputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "gold" } }}
              FormHelperTextProps={{ style: { color: "gold" } }}
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#eebc1d",
              }}
              type="submit">
              Submit
            </Button>
            <Typography>{withdrawal}</Typography>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Withdrawal;
