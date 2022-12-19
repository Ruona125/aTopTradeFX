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
    <div>
      <p>{bankDetails.bank_name}</p>
      <p>{bankDetails.account_number}</p>
      <p>{bankDetails.wallet_address}</p>
    </div>
  );
};

export default BankDetailsComponent;
