import React, { useState } from 'react';
import Bk from './bk';
import Heading from "../../heading";
import { bkData } from './bkdata';
import Description from "../../../Description"


export default function Books() {
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
    setName(bkData[e].name);
    setText(bkData[e].text);
    // setLink(bkData[e].link)
  }


  return (
    <>
      <div className="books-top center">
        <div className="books-left">
          <div className="bk1">
            <Bk
              name="book name"
              text="The beginning is the most precious part of
            the work."
              img="bk-2.jpeg"
              key="{index}"
            />
          </div>
          <div className="bk2">
            <a href="https://www.youtube.com/watch?v=P-DhwN87JDY">
              <Bk
                name="book name"
                text="The beginning is the most precious part of
            the work."
                img="bk-1.jpeg"
                key="{ind3ex}"
              />
            </a>
          </div>
          <div className="bk3">
            <Bk
              name="book name"
              text="The beginning is the most precious part of
            the work."
              img="bk-3.jpeg"
              key="{12}"
            />
          </div>
        </div>
        <div className="books-right center">
          <p style={{ fontSize: "2rem" }}>
            The beginning is the most precious part of the work. No one can
            afford to stand by and do nothing, so grab limitless opportunities
            from here. Find the books related to subjects of CSE and IT. Check
            them out!!!
          </p>
          <a href="#booksBottom" className="button">
            EXPLORE
          </a>
        </div>
      </div>

      <div className="books-bottom " id="booksBottom">
        <div className="booksNav center" id="booksNav">
          <div className="booksNav-left">
            <Heading text="Books" size="8" />
          </div>
          <div className="input-group ">
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
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </button>
          </div>
        </div>
        {bkData.map((value, index) => {
          if (
            value.name.toUpperCase().search(search) != -1 ||
            search.length == 0
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
        tabindex="-1"
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
