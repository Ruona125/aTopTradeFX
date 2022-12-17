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
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
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
  const [logOutAuth, setIsAuth] = useState(false);

  const isAuthenticated = () => {
    if (sessionStorage.getItem("token")) {
      setIsAuth(true);
    }
  };
  const isNotAuthenticated = () => {
    setIsAuth(true);
  };
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography className={classes.title} variant="h6">
                <Link to="/">Atop Trade FX</Link>
              </Typography>
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
              </Select>
              <AuthModal
                isAuthenticated={isAuthenticated}
                isNotAuthenticated={isNotAuthenticated}
                isAuth={logOutAuth}
              />
              {logOutAuth && <UserSidebar />}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
