import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "../../bsignup/bstyle.css";
import Nav from "./nav"
import Home from "./home"
import  "./academic.css"

export default function Maina() {
  return (
    <div className="Main">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}
