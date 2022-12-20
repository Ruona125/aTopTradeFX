import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashBoard from "./Admin";
import DashBoard from "./DashBoard";

const Main = () => {
  const [roles, setRole] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/user/signin").them((response) => {
      if (response.data.success === true) {
        console.log(response.data[0]);
        setRole(response.data[0].roles);
      }
    });
  }, []);
  return (
    <div>
      {roles === "admin" && <AdminDashBoard />}{" "}
      {roles === "user" && <DashBoard />}
    </div>
  );
};

export default Main;
