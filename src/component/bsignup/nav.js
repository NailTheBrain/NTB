import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "./bstyle.css"

const Nav = () => {
  let navigate = useNavigate();

  return (
    <div className="nav center">
      <div className="rightlink center" onClick={() => navigate("/")}>
        <img src={require("../images/logo.png")} alt="SA" />
        <span>
          <span>&nbsp;N</span>ail <span>T</span>he <span>B</span>rain
        </span>
      </div>
      <div className="leftlink center">
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/field"}
        >
          Sign In
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : ""}
          }} to={"/fields"}
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
