import React from "react";
import { ReactComponent as Settings } from "../../Assets/Icons/settings.svg";
import { ReactComponent as Employee } from "../../Assets/Icons/user.svg";
import { ReactComponent as Coupon } from "../../Assets/Icons/coupondiscount.svg";
import { ReactComponent as Product } from "../../Assets/Icons/package.svg";
import { ReactComponent as Customer } from "../../Assets/Icons/customer.svg";
import { ReactComponent as Analytics } from "../../Assets/Icons/analytics.svg";
import { ReactComponent as Dashboard } from "../../Assets/Icons/dashboard.svg";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
      >
        <Dashboard
          fill={({ isActive }) => (isActive ? "white" : "customDark")}
        />
      </NavLink>
      <NavLink
        to="/analytics"
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
      >
        <Analytics
          fill={({ isActive }) => (isActive ? "white" : "customDark")}
        />
      </NavLink>
      <NavLink
        to="/customer"
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
      >
        <Customer
          fill={({ isActive }) => (isActive ? "white" : "customDark")}
        />
      </NavLink>

      <NavLink
        to="/editproduct"
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
      >
        <Product fill={({ isActive }) => (isActive ? "white" : "customDark")} />
      </NavLink>

      <NavLink
        to="/coupon"
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
      >
        <Coupon fill={({ isActive }) => (isActive ? "white" : "customDark")} />
      </NavLink>
      <NavLink
        to="/employee"
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
      >
        <Employee
          fill={({ isActive }) => (isActive ? "white" : "customDark")}
        />
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive
            ? "absolute bottom-16 nav-active"
            : "absolute bottom-16 nav-inactive"
        }
      >
        <Settings
          fill={({ isActive }) => (isActive ? "white" : "customDark")}
        />
      </NavLink>
    </ul>
  );
};

export default Sidebar;
