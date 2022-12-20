import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashBoard from "./Admin";
import DashBoard from "./DashBoard";

const Main = () => {
  const [roles, setRole] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/user/signin").then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setRole(response.data[0].roles);
      } else {
        console.log("error");
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
