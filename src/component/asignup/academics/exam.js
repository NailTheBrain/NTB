import React from "react";
import Heading from "../../heading";

export default function Exam() {
    function show() {
      let a = document.getElementById("exam");
      a.classList.toggle("expand");
    }
  return (
    <>
      <a className="section-head center" id="Exam" href="#Exam" onClick={show}>
        <div className="Sleft center">
          <h1>All the Data for Exam is provided here</h1>
        </div>
        <i class="fas fa-angle-double-down"></i>
        <div className="Sright">
          <Heading text="Exam" size="12" />
        </div>
      </a>
      <div className="section-bottom" id="exam"></div>
    </>
  );
}
