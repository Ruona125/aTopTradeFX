import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Withdrawal from "./pages/Withdrawal";
import DashBoard from "./pages/DashBoard";
import AdminDashBoard from "./pages/Admin";
import UserTrade from "./pages/UserTrade";
import UpdateTrade from "./pages/UpdateTrade";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/coins/:id" element={<CoinPage />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
        <Route path="/create/trade/:user_id" element={<UserTrade />} />
        <Route path="/update/trade/:user_id" element={<UpdateTrade />} />
      </Routes>
    </div>
  );
}

export default App;
