import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import "./tradingView.styles.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 150,
    maxWidth: 150,
  },
  tableCell: {
    borderBottom: "none",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("22:35:59", 0.000056, 5.3424984),
  createData("22:35:59", 0.0000567, 4.34566),
  createData("22:35:59", 0.0000234, 4.34566),
  createData("22:35:59", 0.0000564, 6.6768876),
  createData("22:35:59", 0.0000234, 4.34566),
  createData("22:35:59", 0.0000234, 4.34566),
  createData("22:35:59", 0.0000567, 4.34566),
  createData("22:35:59", 0.0000234, 4.34566),
  createData("22:35:59", 0.0000567, 4.34566),
  createData("22:35:59", 0.0000564, 6.6768876),
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TradingView = () => {
  const [secondValue, setSecondValue] = React.useState(2);

  const handleSecondChange = (event, newValue) => {
    setSecondValue(newValue);
  };
  const classes = useStyles();

  return (
    <div
      className="trade-wrapper-tables"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className="grid-wrapper">
        <div className="grid-item">
          <TableContainer>
            <Table
              className={classes.table}
              aria-label="simple table"
              size="small">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    <Typography style={{ color: "#FFD700" }}>Coin</Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Typography style={{ color: "#FFD700" }}>Price</Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Typography style={{ color: "#FFD700" }}>Volume</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row">
                      <Typography style={{ color: "#fff" }}>
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <Typography style={{ color: "#fff" }}>
                        {row.calories}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <Typography style={{ color: "#fff" }}>
                        {row.fat}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="grid-item">
          <AppBar
            position="static"
            style={{ width: "20em", backgroundColor: "#14161a" }}>
            <Tabs
              value={secondValue}
              onChange={handleSecondChange}
              indicatorColor="primary"
              // textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example">
              <Tab
                style={{ color: "#FFD700" }}
                label="HISTORY"
                {...a11yProps(0)}
              />
              <Tab
                style={{ color: "#FFD700" }}
                label="MARKET TRADING "
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>

          <Table
            className={classes.table}
            aria-label="simple table"
            size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  <Typography style={{ color: "#FFD700" }}>Time</Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Typography style={{ color: "#FFD700" }}>Amount</Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Typography style={{ color: "#FFD700" }}>Volume</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row">
                    <Typography style={{ color: "#fff" }}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Typography style={{ color: "#fff" }}>
                      {row.calories}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Typography style={{ color: "#fff" }}>{row.fat}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TradingView;
