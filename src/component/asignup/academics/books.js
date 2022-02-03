import React from 'react';
import Heading from "../../heading";

export default function Books() {
  function show(){
    let a = document.getElementById("book");
    a.classList.toggle("expand")
  }

  return (
    <>
      <a className="section-head center" id="Book" href='#Book' onClick={() => show()}>
        <div className="Sleft">
          <Heading text="Books" size="12" />
        </div>
        <i class="fas fa-angle-double-down"></i>
        <div className="Sright center">
          <h1>Books which helps you in your semester</h1>
        </div>
      </a>
      <div className="section-bottom" id="book"></div>
    </>
  );
}
