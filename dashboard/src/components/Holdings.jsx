import { useState,useEffect } from "react";
import { holdings } from "../data/data";
import axios from 'axios';
import { VerticalGraph } from "./verticalGraph";
import { DoughnutChart } from "./DoughnutChart";

const Holdings = () => {
  let[holdingsData, setHoldingsData] = useState([]);
  let[isLoading, setIsLoading] = useState(true);
  let[error, setError] = useState(null);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/allholdings`)
    .then((response) => {
      setHoldingsData(response.data);
      setIsLoading(false);
    })
    .catch((err) => {
      setError("Failed to fetch holdings. Is the server running?: " + err.message);
      setIsLoading(false);
    });
  },[]);

  if(isLoading) return <div className="loading">Loading holdings...</div>;
  if(error) return <div className="error">{error}</div>;
const labels=holdingsData.map((subArray)=>subArray.name);
const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: holdingsData.map((stock) => stock.price),
      backgroundColor: 'rgba(150, 214, 156, 0.8)',
    }
  ],
};





const doughnutData = {
  labels: holdingsData.map((stock) => stock.name),
  datasets: [
    {
      label: "Portfolio Distribution",
      data: holdingsData.map((stock) => stock.qty * stock.price),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <>
      <h3 className="title">Holdings ({holdingsData.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>
          {holdingsData.map((stock, index) =>{
             const curValue=stock.qty*stock.price;
             const isProfit=curValue - stock.qty * stock.avg >=0.0;
             const proftClass=isProfit? "profit" : "loss";
             const dayClass=stock.isLoss? "loss" : "profit";

             return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={proftClass}>{(curValue - stock.qty * stock.avg).toFixed(2)}</td>
                <td className={proftClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
             )
          })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}></VerticalGraph>

      <div style={{ width: "50%", margin: "5% auto" }}>
  <h4 style={{ 
    textAlign: "center", 
    fontWeight: "300", 
    color: "rgb(71,71,71)",
    marginBottom: "4%"
  }}>
    Portfolio Distribution
  </h4>
  <DoughnutChart data={doughnutData} />
</div>
    </>
  );
};

export default Holdings;