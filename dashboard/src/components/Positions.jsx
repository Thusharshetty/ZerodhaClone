import { useState, useEffect } from "react";
import axios from 'axios';

import { positions } from "../data/data";

const Positions = () => {
  let[positionsData, setPositionsData] = useState([]);
  let[isLoading, setIsLoading] = useState(true);
  let[error,setError] = useState(null); 
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/allpositions`)
    .then((response) => {
      setPositionsData(response.data);
      setIsLoading(false);
    }).catch((err) => {
      setError("Failed to fetch positions. Is the server running?: " + err.message);
      setIsLoading(false);
    });
  },[])
  if(isLoading) return <div className="loading">Loading positions...</div>;
  if(error) return <div className="error">{error}</div>;

  return (
    <>
      <h3 className="title">Positions ({positionsData.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>
          <tbody>
          {positionsData.map((stock, index) => {
            const curValue = stock.qty * stock.price;
            const isProfit = curValue - stock.qty * stock.avg >= 0.0;
            const proftClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={proftClass}>{(curValue - stock.qty * stock.avg).toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;