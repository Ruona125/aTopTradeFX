import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    // minWidth: 500,
  },
});

const Report = () => {
  const classes = useStyles();
  const [reports, setReports] = useState(null);
  useEffect(() => {
    const url = "http://localhost:8000/report";
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    axios.get(url, { headers }).then((response) => {
      setReports(response.data);
    });
  }, []);
  if (!reports) return null;

  const columns = [
    { id: "firstName", label: "First Name", minWidth: 50, align: "center" },
    { id: "lastName", label: "Last Name", minWidth: 50, align: "center" },
    { id: "balance", label: "Balance", minWidth: 50, align: "center" },
    { id: "Capital", label: "Capital", minWidth: 50, align: "center" },
    {
      id: "Profit",
      label: "Profit",
      minWidth: 50,
      align: "center",
    },
    {
      id: "TotalNumberOfTrade",
      label: "Total Number Of Trades",
      minWidth: 50,
      align: "center",
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 50,
      align: "center",
    },
    {
      id: "UpdateTradeDetails",
      label: "Update Trade Details",
      minWidth: 50,
      align: "center",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth, color: "gold" }}>
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report, i) => {
            return (
              <StyledTableRow key={i}>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.first_name}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.last_name}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.balance}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.capital}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.profit}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.total_number_of_trade}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {report.amount}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  <Link to={`/update/trade/${report.user_id}`}>
                    Update Trade Details
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report;
