import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import "./bstyle.css";

export default function Form() {
  return (
    <>
      <div className="form center">
        <div className="center links">
          <h1>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "black" : "" };
              }}
              to={"/form/signin"}
            >
              Sign IN
            </NavLink>
          </h1>
          <h1>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "black" : "" };
              }}
              to={"/form/signup"}
            >
              Sign UP
            </NavLink>
          </h1>
        </div>
        <Outlet />
      </div>
    </>
  );
}
