import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
      display: "flex",
    },
  },
}));
const investments = [
  {
    value: "Basic",
    label: "Basic",
  },
  {
    value: "Standard",
    label: "Standard",
  },
  {
    value: "Classic",
    label: "Classic",
  },
  {
    value: "Ultimate",
    label: "Ultimate",
  },
];
const userRoles = [
  {
    value: "user",
    label: "user",
  },
];

const Signup = ({ handleClose, setValue }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [investment, setInvestment] = useState("Basic");
  const [phone_number, setPhone_number] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("user");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const classes = useStyles();

  const register = async (
    first_name,
    last_name,
    email,
    password,
    phone_number,
    date_of_birth,
    address,
    investment,
    roles
  ) => {
    try {
      let res = await axios.post("http://localhost:8000/user/register", {
        first_name,
        last_name,
        email,
        password,
        phone_number,
        date_of_birth,
        address,
        investment,
        roles,
      });
      if (res.status === 200 && res.data.roles === "admin") {
        window.sessionStorage.setItem("firstName", res.data.first_name);
        window.sessionStorage.setItem("lastName", res.data.last_name);
        window.sessionStorage.setItem("email", res.data.email);
        window.sessionStorage.setItem("id", res.data.user_id);
        window.sessionStorage.setItem("investment", res.data.investment);
        window.sessionStorage.setItem("roles", res.data.roles);
        window.sessionStorage.setItem("token", res.data.token);
        // navigate(`/admin/dashboard`);
        setValue(0);
      } else if (res.status === 200 && res.data.roles === "user") {
        window.sessionStorage.setItem("firstName", res.data.first_name);
        window.sessionStorage.setItem("lastName", res.data.last_name);
        window.sessionStorage.setItem("email", res.data.email);
        window.sessionStorage.setItem("token", res.data.token);
        window.sessionStorage.setItem("id", res.data.userId);
        window.sessionStorage.setItem("investment", res.data.investment);
        window.sessionStorage.setItem("roles", res.data.roles);

        // navigate(`/main/${res.data.user_id}`);
        setValue(0);
      } else {
        setLoginStatus("incorrect registration details");
      }
    } catch (error) {
      setLoginStatus("incorrect login details");
    }
  };
  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <form
        className={classes.root}
        onSubmit={(event) => {
          event.preventDefault();
          register(
            first_name,
            last_name,
            email,
            password,
            phone_number,
            date_of_birth,
            address,
            investment,
            roles
          );
        }}>
        <TextField
          variant="outlined"
          type="name"
          label="First name"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="name"
          label="Last name"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="email"
          label="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="password"
          label="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="number"
          label="Phone Number"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="date"
          label="Date of birth"
          value={date_of_birth}
          onChange={(e) => setDate_of_birth(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="text"
          label="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
        />
        <TextField
          id="standard-select-currency"
          select
          label="Investment"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          helperText="Please select your investment plan">
          {investments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-select-roles"
          style={{ display: "none" }}
          select
          label="user"
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
          helperText="Please select your roles">
          {userRoles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#eebc1d",
          }}
          type="submit">
          Sign Up
        </Button>
        <Typography style={{ color: "red" }}>{loginStatus}</Typography>
      </form>
    </Box>
  );
};

export default Signup;
