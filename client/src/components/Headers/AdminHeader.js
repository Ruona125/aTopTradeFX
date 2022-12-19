import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  makeStyles,
  MenuItem,
  createTheme,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import AuthModal from "../Authentication/AuthModal";
import UserSidebar from "../Authentication/UserSidebar";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const AdminHeader = () => {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography className={classes.title} variant="h6">
                <Link to="/">Atop Trade FX</Link>
              </Typography>
              <Link to="/admin/dashboard">
                <Button
                  variant="contained"
                  style={{
                    width: 110,
                    height: 40,
                    marginLeft: 15,
                    backgroundColor: "#eebc1d",
                  }}>
                  DashBoard
                </Button>
              </Link>
              <Link to="/report">
                <Button
                  variant="contained"
                  style={{
                    width: 110,
                    height: 40,
                    marginLeft: 15,
                    backgroundColor: "#eebc1d",
                  }}>
                  Reports
                </Button>
              </Link>
              <UserSidebar />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default AdminHeader;
