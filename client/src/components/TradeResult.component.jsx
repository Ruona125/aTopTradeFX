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

  // useEffect(() => {
  //   const url = `http://localhost:8000/`
  // })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Buy/Sell</StyledTableCell>
            <StyledTableCell align="center">Amount BPS</StyledTableCell>
            <StyledTableCell align="center">Dealt BPS</StyledTableCell>
            <StyledTableCell align="center">Capital</StyledTableCell>
            <StyledTableCell align="center">Balance</StyledTableCell>
            <StyledTableCell align="center">Profit</StyledTableCell>
            <StyledTableCell align="center">
              Total Number of Trades
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">ruona</StyledTableCell>
            <StyledTableCell align="center">phil</StyledTableCell>
            <StyledTableCell align="center">john</StyledTableCell>
            <StyledTableCell align="center">james</StyledTableCell>
            <StyledTableCell align="center">joshua</StyledTableCell>
            <StyledTableCell align="center">ethan</StyledTableCell>
            <StyledTableCell align="center">jake</StyledTableCell>
            <StyledTableCell align="center">nathan</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
