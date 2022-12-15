import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AvatarIcon from "../../utils/avatar.webp";

const useStyles = makeStyles({
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace",
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
    objectFit: "contain",
  },
  logout: {
    height: "8%",
    width: "100%",
    backgroundColor: "#EEBC1D",
    marginTop: 20,
  },
  watchlist: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    overflowY: "scroll",
  },
});

const logOut = () => {};

export default function UserSidebar() {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });
  let firstName = sessionStorage.getItem("firstName");
  let lastName = sessionStorage.getItem("lastName");
  let email = sessionStorage.getItem("email");
  let investment = sessionStorage.getItem("investment");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "#EEBC1D",
            }}
            src={AvatarIcon}
            alt="profile icon"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={AvatarIcon}
                  alt="picture profile"
                />
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}>
                  <Link to="/withdrawal">withdrawal</Link>
                </span>

                <div className={classes.watchlist}>
                  {/* <span style={{ fontSize: 15, textShadow: "0 0 15px black" }}>
                    Watchlist
                  </span> */}
                  <span
                    style={{
                      width: "100%",
                      fontSize: 25,
                      textAlign: "center",
                      fontWeight: "bolder",
                      wordWrap: "break-word",
                    }}>
                    first name: {firstName}
                  </span>
                  <span
                    style={{
                      width: "100%",
                      fontSize: 25,
                      textAlign: "center",
                      fontWeight: "bolder",
                      wordWrap: "break-word",
                    }}>
                    Last Name: {lastName}
                  </span>
                  <span
                    style={{
                      width: "100%",
                      fontSize: 25,
                      textAlign: "center",
                      fontWeight: "bolder",
                      wordWrap: "break-word",
                    }}>
                    Email: {email}
                  </span>
                  <span
                    style={{
                      width: "100%",
                      fontSize: 25,
                      textAlign: "center",
                      fontWeight: "bolder",
                      wordWrap: "break-word",
                    }}>
                    Investment: {investment}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logOut}>
                Log Out
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
