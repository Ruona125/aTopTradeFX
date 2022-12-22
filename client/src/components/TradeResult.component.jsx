import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function TradeResult() {
  const classes = useStyles();
  // const userId = sessionStorage.getItem("id")
  const { user_id } = useParams();
  const [userTradeDetails, setUserTradeDestils] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8000/usertrade/${user_id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    axios.get(url, { headers }).then((response) => {
      setUserTradeDestils(response.data);
    });
  });
  if (!userTradeDetails) return null;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Capital</StyledTableCell>
            <StyledTableCell align="center"> Profit</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">
              Total Number Of Trades
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">
              {userTradeDetails.capital}
            </StyledTableCell>
            <StyledTableCell align="center">
              {userTradeDetails.profit}
            </StyledTableCell>

            <StyledTableCell align="center">
              {userTradeDetails.amount}
            </StyledTableCell>
            <StyledTableCell align="center">
              {userTradeDetails.total_number_of_trade}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
