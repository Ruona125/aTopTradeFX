import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
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

const UserTradeComponent = () => {
  const classes = useStyles();
  const { user_id } = useParams();
  const [certainTrade, setCertainTrade] = useState(null);

  const [capital, setCapital] = useState("");
  const [profit, setProfit] = useState("");
  const [total_number_of_trade, setTotalNumberOfTrade] = useState("");
  const [amount, setAmount] = useState("");
  const [tradingDetails, setTradingDetails] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:8000/user/register/${user_id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    axios.get(url, { headers }).then((response) => {
      setCertainTrade(response.data);
    });
  }, [user_id]);
  if (!certainTrade) return null;

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: user_id,

      capital: capital,
      profit: profit,
      total_number_of_trade: total_number_of_trade,
      amount: amount,
    };
    const url = "http://localhost:8000/user/trade";
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    try {
      let res = await axios.post(url, data, { headers });
      if (res.status === 200) {
        setCapital("");
        setProfit("");
        setTotalNumberOfTrade("");
        setAmount("");
        navigate("/admin/dashboard");
      } else {
        setTradingDetails("error sending data");
      }
    } catch (err) {
      setTradingDetails("error sending data");
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
              Create Trade
            </Button>
            <Typography>{tradingDetails}</Typography>
          </form>
        </div>
      </center>
    </div>
  );
};

export default UserTradeComponent;
