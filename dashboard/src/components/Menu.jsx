import { useState } from "react";
import {Link,} from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import axios from "axios";
import "../index.css";

const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const[selectedMenu, setSelectedMenu] = useState(0);
  const {username} = useAuth();

  const handleMenuclick=(idx)=>{
    setSelectedMenu(idx);
  }
  const handleprofileclick=(idx)=>{
    setIsProfileOpen(!isProfileOpen);
  }

   const handleLogout = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, {
      withCredentials: true,
    });
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <div className="menu-container">
      
      {/* LEFT SIDE: Logo + Links */}
      <div className="left-side">
        <img src="logo.png" style={{ width: "50px" }} alt="logo" />
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuclick(0)}>
              <p className={selectedMenu === 0 ? "menu selected" : "menu"}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuclick(1)}>
              <p className={selectedMenu === 1 ? "menu selected" : "menu"}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuclick(2)}>
              <p className={selectedMenu === 2 ? "menu selected" : "menu"}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuclick(3)}>
              <p className={selectedMenu === 3 ? "menu selected" : "menu"}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuclick(4)}>
              <p className={selectedMenu === 4 ? "menu selected" : "menu"}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuclick(5)}>
              <p className={selectedMenu === 5 ? "menu selected" : "menu"}>Apps</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE: Profile */}
      <div className="profile-container">
        <div className="profile" onClick={handleprofileclick}>
          <div className="avatar">{username ? username.charAt(0).toUpperCase() : "Z"}</div>
          <p className="username">{username || "ZERODHA_USER"}</p>
        </div>

        {isProfileOpen && (
          <div className="profile-dropdown">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Menu;