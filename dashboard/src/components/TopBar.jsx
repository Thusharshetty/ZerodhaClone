import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

import Menu from "./Menu";

const TopBar = () => {
  const[nifty,setNifty]=useState({ price: null, change: null });
  const[sensex,setSensex]=useState({ price: null, change: null });


  // symbol = "^NSEI" for NIFTY, "^BSESN" for SENSEX
  const fetchIndex = async (symbol)=>{
    try{
      const res = await axios.get(
        `/api/finance/v8/finance/chart/${symbol}?interval=1d`
      );
       const meta = res.data.chart.result[0].meta;
      const price = meta.regularMarketPrice;
      const prevClose = meta.chartPreviousClose;

    //  console.log(`Data for ${symbol}:`, { price, prevClose, meta });

      // 2. Safety Check: Only calculate if both values are valid numbers
      
      let  change = (((price - prevClose) / prevClose) * 100).toFixed(2);
      
  
      return { price, change };
    }catch(err){
      console.error(`Failed to fetch data for ${symbol}:`, err);
      return  null;
    }
  }

  const fetchAllIndices = async () => {
    const niftyData = await fetchIndex("^NSEI");
    const sensexData = await fetchIndex("^BSESN");

    if (niftyData) setNifty(niftyData);
    if (sensexData) setSensex(sensexData);
  };


  useEffect(() => {
    // Fetch immediately when component loads
    fetchAllIndices();

    // Then fetch every 30 seconds
    const interval = setInterval(() => {
      fetchAllIndices();
    }, 30000);

    // Cleanup — cancel alarm when TopBar unmounts
    return () => clearInterval(interval);
  }, []);

const changeColor = (change) => {
    if (change === null) return {};
    return { color: change >= 0 ? "rgb(72, 194, 55)" : "rgb(223, 73, 73)" };
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">
            {nifty.price ? nifty.price.toFixed(2) : "--"}
          </p>
          <p className="percent" style={changeColor(nifty.change)}>
             {nifty.change ? `${nifty.change > 0 ? "+" : ""}${nifty.change}%` : "--"}
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">
            {sensex.price ? sensex.price.toFixed(2) : "--"}
          </p>
          <p className="percent" style={changeColor(sensex.change)}>
           {sensex.change ? `${sensex.change > 0 ? "+" : ""}${sensex.change}%` : "--"}
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;