import React, { useState } from 'react';
import Bk from './bk';
import Heading from "../../heading";
// import { bkData } from './bkdata';
// import Description from "../../../Description"


export default function Books(props) {
  // for seaching 
  const [search,setSearch]=useState("");
  function Search(e){
    e=e.toUpperCase();
    setSearch(e)
  }
// for scrollong dispaly nav bar
  window.addEventListener("scroll",()=>{
      if(window.scrollY>=(window.innerHeight*3)/6)
        document.getElementById("booksNav").style.transform = "scale(1)";
      else 
        document.getElementById("booksNav").style.transform = "scale(0)";
  });
  // for description
   const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  function description(e){
    setName(props.type[e].name);
    setText(props.type[e].text);
    // setLink(bkData[e].link)
  }


  return (
    <>
      <div className="books-top center">
        <div className="books-left">
          {props.type.map((value, index) => {
            let i =  `bk${index+1}`
           if(index < 3)  return (
                <div
                  id="book"
                  className={i}
                  onClick={() => description(index)}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  key={index}
                >
                  <Bk name={value.name} text={value.text} img={value.img} />
                </div>
              );
          })}
        </div>
        <div className="books-right center">
          <h2>{props.name}</h2>
          <p style={{ fontSize: "2rem" }}>{props.text}</p>
          <a href="#booksBottom" className="button">
            EXPLORE
          </a>
        </div>
      </div>
      <hr />
      <div className="books-bottom " id="booksBottom">
        <div className="booksNav center" id="booksNav">
          <div className="booksNav-left">
            <Heading text={props.name} size="8" />
          </div>
          <div className="input-group" id="searchOpen">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={search}
              onChange={(e) => Search(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={() => {
                document
                  .getElementById("searchOpen")
                  .classList.toggle("searchOpen");
              }}
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </button>
          </div>
        </div>
        {props.type.map((value, index) => {
          if (
            value.name.toUpperCase().search(search) !== -1 ||
            search.length === 0
          ) {
            return (
              <div
                id="book"
                onClick={() => description(index)}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                key={index}
              >
                <Bk name={value.name} text={value.text} img={value.img} />
              </div>
            );
          }
        })}
      </div>
      <div
        className="offcanvas offcanvas-start "
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            {name}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>{text}</p>
          <a href={link} className="button center">
            Open &nbsp; <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}
