// import React, { Component }  from 'react';
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import GiteIcon from "@mui/icons-material/Gite";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import LogoutIcon from "@mui/icons-material/Logout";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PaymentIcon from '@mui/icons-material/Payment'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="top">

        <Link to="/home" style={{ textDecoration: 'none' }}>
          <span className="logo">Home</span>
        </Link>

      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>DashBoard</span>
          </li>
          <p className="title">LIST</p>

          <Link to="/user" style={{ textDecoration: 'none' }}>

            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>

          </Link>

          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>

          <li>
            <FeaturedPlayListIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>


          <li>
            <MonitorHeartIcon className="icon" />
            <span>Logs</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodIcon className="icon" />
            <span>Ststem Health</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/user/payment" style={{ textDecoration: 'none' }}>
          <li>
            <PaymentIcon className="icon" />
            <span>Payment</span>
          </li>
          </Link>


          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>


      <div className="bottom">
        <div className="colourOption"></div>
        <div className="colourOption"></div>
      
       
      </div>


    </div>
  );
};

export default Sidebar;
