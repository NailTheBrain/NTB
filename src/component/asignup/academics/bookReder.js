import React from 'react'
import Bk from "./bk";

export default function BookReder(props) {
  // function scroll(){
  //   console.log(document.getElementById("booksBottom").scrollLeft);
  // }
  return (
    <>
      <hr />
      <div
        className="booksBottomHead center  hover-scale "
        data-tilt
      >
        <div className="bookHeading mb-3 mt-3">
          <h3>{props.srch} books</h3>
        </div>
        <div className="books-bottom " id="booksBottom">
          {props.type.map((value, index) => {
            if (value.name.toUpperCase().search(props.srch) !== -1) {
              return (
                <div
                  id="book"
                  onClick={() => props.des(index)}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  key={index}
                >
                  <Bk name={value.name} text={value.text} img={value.img} />
                </div>
              );
            } else return <div className="none">.</div>;
          })}
        </div>
      </div>
    </>
  );
}
