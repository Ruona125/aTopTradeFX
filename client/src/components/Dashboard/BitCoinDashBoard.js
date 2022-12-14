import React from "react";
import { CRYPTO_COMPARE } from "../keys";
import { TradingViewStockChartWidget } from "react-tradingview-components";

import "./dashboard.styles.css";

import TradingView from "../TradeView/TradingView.component";

class BitCoinDashBoard extends React.Component {
  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: "",
  };

  componentDidMount() {
    this.loadChartData();
  }

  loadChartData = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
    );
    const data = await response.json();
    const bulkData = data.Data.Data;
    const dataArray = [];

    bulkData.map((y) =>
      dataArray.push({
        x: y.time * 1000,
        y: y.transaction_count * y.average_transaction_value,
      })
    );

    this.setState({ chartData: dataArray });
    this.setState({ symbol: this.state.query });
  };

  render() {
    return (
      <div className="container">
        <div className="trade-container">
          <TradingViewStockChartWidget
            symbol="AAPL"
            theme="Light"
            range="12m"
            width={350}
            height={500}
          />

          <TradingViewStockChartWidget
            symbol="USD"
            theme="Dark"
            range="12m"
            width={350}
            height={500}
          />
        </div>
        <TradingView />
      </div>
    );
  }
}

export default BitCoinDashBoard;
