import React, { useState } from "react";
import { Box, TextField, Button, makeStyles } from "@material-ui/core";
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

const Login = ({ isAuthenticated, isNotAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  let navigate = useNavigate();

  // let saveAuthTokenSession = (userDetails) => {
  //   window.sessionStorage.setItem("userDetail", userDetails);
  //   // console.log(token);
  // };

  const handleLogin = async (email, password) => {
    try {
      let res = await axios.post("http://localhost:8000/user/signin", {
        email,
        password,
      });
      if (res.status === 200) {
        // console.log(res.data);
        // saveAuthTokenSession(res.data);
        window.sessionStorage.setItem("firstName", res.data.first_name);
        window.sessionStorage.setItem("lastName", res.data.last_name);
        window.sessionStorage.setItem("email", res.data.email);
        window.sessionStorage.setItem("token", res.data.token);
        window.sessionStorage.setItem("id", res.data.userId);
        window.sessionStorage.setItem("investment", res.data.investment);

        isAuthenticated();
        navigate(`/dashboard/${window.sessionStorage.getItem("id")}`);
      }
    } catch (error) {
      console.log(error);
      // setMessage("incorrect login details");
    }
  };
  return (
    <div>
      <Box
        p={3}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <form
          className={classes.root}
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin(email, password);
          }}>
          <TextField
            variant="outlined"
            type="email"
            label="enter email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            variant="outlined"
            type="password"
            label="enter password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#eebc1d",
            }}
            type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;
