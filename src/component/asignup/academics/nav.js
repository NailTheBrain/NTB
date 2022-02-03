import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../../bsignup/bstyle.css";

const Nav = () => {
  let navigate = useNavigate();

  return (
    <div className="nav center">
      <div className="rightlink center" onClick={() => navigate("/")}>
        <img src={require("../../images/logo.png")} alt="SA" />
        <span>
          <span>&nbsp;S</span>TUDY<span>A</span>RENA
        </span>
      </div>
      <div className="leftlink center">
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/field"}
        >
          Books
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/field"}
        >
          Exam
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/fields"}
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/fields"}
          className="center"
        >
          <img src={require("../../images/logo.png")} alt="" />
          Abhishek
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/fields"}
          className="center"
        >
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
