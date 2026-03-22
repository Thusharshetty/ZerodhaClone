

import { useState,useEffect } from "react";
import axios from 'axios';

const Orders = () => {
  let[ordersData, setOrdersData] = useState([]);
  let[isLoading, setIsLoading] = useState(true);
  let[error, setError] = useState(null);

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/allorders`)
    .then((res)=>{
      setOrdersData(res.data);
      setIsLoading(false);
    })
    .catch((err)=>{
      setError("Failed to fetch orders. Is the server running?: " + err.message);
      setIsLoading(false);

    });
  },[]);

  if(isLoading) return <div className="loading">Loading orders...</div>;
  if(error) return <div className="error">{error}</div>;

  return (
     <div className="orders">
      <h3 className="title">Orders ({ordersData.length})</h3>
      {ordersData.length===0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) :(
        <div className="order-table">
        <table>
          <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order,idx)=>(
                <tr key={idx}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.mode}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
      )
      }
     </div>
  );
};

export default Orders;