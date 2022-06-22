import React from 'react';
import Nav from "./nav"
import Home from "./home"
import Field from "./field"
import Fields from "./fields"
import Form from "./form"
import "./bstyle.css"
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Signin from './signin';
import Signup from './signup';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/field" element={<Field />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/form" element={<Form />}>
          <Route path="/form/signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
