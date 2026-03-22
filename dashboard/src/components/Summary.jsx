import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { holdings } from "../data/data";
import useAuth from "../hooks/useAuth";

const Summary = () => {
   const [holdingsData, setHoldingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {username} = useAuth();

  useEffect(() => {
    axios.get("http://localhost:3002/allholdings")
      .then((response) => {
        setHoldingsData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch holdings data.");
        setLoading(false);
      });
  }, []);

  const totalInvestment = holdingsData.reduce((total, stock) => {
    return total + (stock.qty * stock.avg);
  }, 0);

  const currentValue = holdingsData.reduce((total, stock) => {
    return total + (stock.qty * stock.price);
  }, 0);

  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0
    ? ((pnl / totalInvestment) * 100).toFixed(2)
    : 0;

  // 29875.55 → "29.88k"
  const formatValue = (value) => {
    if (value >= 1000) return (value / 1000).toFixed(2) + "k";
    return value.toFixed(2);
  };

  if (loading) return <div className="loading">Loading summary...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <div className="username">
        <h6>Hi {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {formatValue(Math.abs(pnl))}{" "}
              <small>{pnl >= 0 ? "+" : "-"}{Math.abs(pnlPercent)}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
             <p>Current Value <span>{formatValue(currentValue)}</span></p>
            <p>Investment <span>{formatValue(totalInvestment)}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;