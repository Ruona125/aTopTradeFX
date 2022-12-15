import React from "react";

import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import TradeResult from "../components/TradeResult.component";
// import axios from "axios";

const DashBoard = () => {
  // const [userDetails, setUserDetails] = useState(null);
  // const { user_id } = useParams();
  // console.log(user_id);
  // useEffect(() => {
  //   let url = `http://localhost:8000/user/register/${user_id}`;
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: window.sessionStorage.getItem("token"),
  //   };
  //   axios.get(url, { headers }).then((res) => {
  //     setUserDetails(res.data);
  //     // console.log(userDetails);
  //   });
  //   // console.log(userDetails);
  //   window.sessionStorage.setItem("userDetails", userDetails);
  // });
  return (
    <div className="container">
      <BitCoinDashBoard />
      <TradeResult />
    </div>
  );
};

export default DashBoard;
