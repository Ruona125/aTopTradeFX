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

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const url = "http://localhost:8000/user/register";
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);
  if (!users) return null;

  const columns = [
    { id: "firstName", label: "First Name", minWidth: 50, align: "center" },
    { id: "lastName", label: "Last Name", minWidth: 50, align: "center" },
    { id: "Email", label: "Email", minWidth: 50, align: "center" },
    { id: "Investment", label: "Investment", minWidth: 50, align: "center" },
    {
      id: "phoneNumber",
      label: "Phone Number",
      minWidth: 50,
      align: "center",
    },
    {
      id: "CreateTrade",
      label: "Create Trade",
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
          {users.map((user, i) => {
            return (
              <StyledTableRow key={i}>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {user.first_name}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {user.last_name}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {user.email}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {user.investment}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  {user.phone_number}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#fff" }}>
                  <Link to={`/create/trade/${user.user_id}`}>Create Trade</Link>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
