import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BankDetailsComponent = () => {
  const { user_id } = useParams();
  const [bankDetails, setBankDetails] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8000/user/bank/${user_id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token"),
    };
    axios.get(url, { headers }).then((response) => {
      setBankDetails(response.data);
    });
  });
  if (!bankDetails) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "10rem",
        bottom: 0,
        margin: "auto",
      }}>
      <center>
        <h1 style={{ color: "gold", paddingBottom: "23px" }}>Bank Details</h1>
        <p style={{ paddingBottom: "23px" }}>
          Bank Name: {bankDetails.bank_name}
        </p>
        <p style={{ paddingBottom: "23px" }}>
          Account Number: {bankDetails.account_number}
        </p>
        <p style={{ paddingBottom: "23px" }}>
          Wallet Address: {bankDetails.wallet_address}
        </p>
      </center>
    </div>
  );
};

export default BankDetailsComponent;
