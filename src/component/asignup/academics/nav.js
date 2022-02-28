import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../bsignup/bstyle.css";

const Nav = () => {
  let navigate = useNavigate();
  function scroll() {
    let i = document.getElementById("toggle").classList;
    // console.log(i);
    if (i.contains("open")) {
      i.remove("open");
      document.getElementById("leftlink").classList.remove("openNav");
    } else {
      i.add("open");
      document.getElementById("leftlink").classList.add("openNav");
    }
  }
  document.querySelectorAll("a").forEach((e)=>{
    e.addEventListener("click",()=>{
      document.getElementById("leftlink").classList.remove("openNav");
      document.getElementById("toggle").classList.remove("open");
    })
  })

  return (
    <nav className=" center">
      <div className="rightlink center" onClick={() => navigate("/academics")}>
        <img src={require("../../images/logo.png")} alt="SA" />
        <span>
          <span>&nbsp;N</span>ail <span>T</span>he <span>B</span>rain
        </span>
      </div>
      <i
        className="fa-solid fa-ellipsis-vertical"
        onClick={() => scroll()}
        id="toggle"
      ></i>
      <div className="leftlink center" id="leftlink">
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/academics/books"}
        >
          Books
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/academics/exams"}
        >
          Exam
        </NavLink>
        {/* <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "" };
          }}
          to={"/academics/contact"}
        >
          Contact
        </NavLink> */}
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
          <i className="fas fa-sign-out-alt" style={{ overflow: "hidden" }}></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
