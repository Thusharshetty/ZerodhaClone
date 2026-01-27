import {Tooltip, Grow} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import{ watchlist} from '../data/data';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>(
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({ stock }) => {
 const [isHovered, setIsHovered] = useState(false);

 const handleEnter=(e)=>{
  setIsHovered(true);
 }

 const handleLeave=(e)=>{
  setIsHovered(false);
 }
return(
  <li onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
    <div className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? <KeyboardArrowDownIcon className='down'/> : <KeyboardArrowUpIcon className='up'/>}
        <span className="price">{stock.price}</span>
      </div>
    </div>
    {isHovered && <WatchListActions uuid={stock.name} />}
  </li>
)
}

const WatchListActions=({uuid})=>{
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement='top' TransitionComponent={Grow}><button className="buy">Buy</button></Tooltip>
        <Tooltip title="Sell (S)" placement='top' TransitionComponent={Grow}><button className="sell">Sell</button></Tooltip>
        <Tooltip title="Analytics (A)" placement='top' TransitionComponent={Grow}><button className="action">
           <BarChartIcon className="icon"/></button></Tooltip>
           <Tooltip title="More" placement='top' TransitionComponent={Grow}><button className="action">
             <MoreHorizIcon className="icon"/></button></Tooltip>
      </span>
    </span>
  )
}