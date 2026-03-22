import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
import { useContext } from "react";

const BuyActionWindow = ({ uid , mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext=useContext(GeneralContext);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: mode,
    }).then(()=>{
      toast.success(`${mode} order placed for ${stockQuantity} share(s) of ${uid}!`);
    }).catch(()=>{
      toast.error("Failed to place order. Try again!");
    })

   mode==="BUY"? generalContext.closeBuyWindow() : generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    mode==="BUY"? generalContext.closeBuyWindow() : generalContext.closeSellWindow();
  };
  const headerStyle = {
    backgroundColor: mode === "BUY" ? "#4184f3" : "#e74c3c",
  };

  return (
    <div className="container" id="buy-window" draggable="true">

      <div className="header" style={headerStyle}>
        <h3>{mode === "BUY" ? "Buy" : "Sell"} — {uid}</h3>
      </div>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleBuyClick}>
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;