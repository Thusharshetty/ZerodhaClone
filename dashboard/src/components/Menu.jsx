import { useState } from "react";
import {Link} from 'react-router-dom';

const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const[selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuclick=(idx)=>{
    setSelectedMenu(idx);
  }
  const handleprofileclick=(idx)=>{
    setIsProfileOpen(!isProfileOpen);
  }

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={()=> handleMenuclick(0)}>
             <p className={selectedMenu ===0 ? "menu selected" : "menu"}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={()=> handleMenuclick(1)}>
             <p className={selectedMenu ===1 ? "menu selected" : "menu"}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={()=> handleMenuclick(2)}>
             <p className={selectedMenu ===2 ? "menu selected" : "menu"}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={()=> handleMenuclick(3)}>
            <p className={selectedMenu ===3 ? "menu selected" : "menu"}>Positions</p>
            </Link>
            
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={()=> handleMenuclick(4)}>
            <p className={selectedMenu ===4 ? "menu selected" : "menu"}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={()=> handleMenuclick(5)}>
            <p className={selectedMenu ===5 ? "menu selected" : "menu"}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile"  onClick={handleprofileclick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;