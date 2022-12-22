import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";

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

const UpdateTradeDetails = () => {
  const classes = useStyles();
  const { user_id } = useParams();
  // const [tradeDetails, setTradeDetails] = useState("")

  const [capital, setCapital] = useState("");
  const [profit, setProfit] = useState("");
  const [total_number_of_trade, setTotalNumberOfTrade] = useState("");
  const [amount, setAmount] = useState("");
  const [tradeDetails, setTradeDetails] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:8000/usertrade/${user_id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    axios.get(url, { headers }).then((response) => {
      setCapital(response.data.capital);
      setProfit(response.data.profit);
      setTotalNumberOfTrade(response.data.total_number_of_trade);
      setAmount(response.data.amount);
    });
  }, [user_id]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      capital: capital,
      profit: profit,
      total_number_of_trade: total_number_of_trade,
      amount: amount,
    };
    const url = `http://localhost:8000/user/trade/${user_id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    try {
      let res = await axios.put(url, data, { headers });
      if (res.status === 200) {
        navigate("/admin/dashboard");
      } else {
        console.log("error updating data");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ alignItems: "center" }}>
      <center>
        <Typography variant="h3" style={{ padding: "43px", color: "gold" }}>
          Atop Trade Fx
        </Typography>
        <div>
          <form
            // style={{ display: "inline-block" }}
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off">
            <TextField
              variant="outlined"
              id="outlined-basic"
              inputProps={{ style: { color: "#fff" } }}
              style={{ paddingBottom: "23px" }}
              label="Capital"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              id="outlined-basic"
              label="Profit"
              inputProps={{ style: { color: "#fff" } }}
              style={{ paddingBottom: "23px" }}
              variant="outlined"
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              id="outlined-basic"
              inputProps={{ style: { color: "#fff" } }}
              style={{ paddingBottom: "23px" }}
              label="Total Number of Trade"
              variant="outlined"
              value={total_number_of_trade}
              onChange={(e) => setTotalNumberOfTrade(e.target.value)}
              InputLabelProps={{ style: { color: "gold" } }}
            />
            <TextField
              id="outlined-basic"
              inputProps={{ style: { color: "#fff" } }}
              label="Amount"
              variant="outlined"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              InputLabelProps={{ style: { color: "gold" } }}
              style={{ paddingBottom: "23px" }}
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#eebc1d",
              }}
              type="submit">
              Update Trade
            </Button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default UpdateTradeDetails;
