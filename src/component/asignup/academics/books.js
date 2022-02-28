import React, { useState,useEffect } from "react";
import Bk from './bk';
import Heading from "../../heading";
import BookReder from './bookReder';
// import { useLocation } from "react-router-dom";


export default function Books(props) {
  // for seaching 
  const [srch,setSrch]=useState("");
  const [show,setShow]=useState(true);
  function Search(e){
    e=e.toUpperCase();
    setSrch(e);
    
  }

  useEffect(()=>{
    srch.length === 0 ? setShow(true) : setShow(false);
  },[srch])

// for scrollong dispaly nav bar
  useEffect(() => {
    const showNav = () => {
       if (window.scrollY >= (window.innerHeight * 3) / 6) {
        document.getElementById("booksNav").style.transform = "scale(1)";
      } else{ document.getElementById("booksNav").style.transform = "scale(0)";
      setSrch("");
    }
    };

    window.addEventListener("scroll", showNav);

    return () => {
      window.removeEventListener("scroll", showNav);
    };
  }, []);

  // for description
   const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  function description(e){
    setName(props.type[e].name);
    setText(props.type[e].text);
    // setLink(bkData[e].link)
    console.log(e);
  }


  return (
    <div data-aos="zoom-out" >
      <div className="books-top center">
        <div className="books-left">
          {props.type.map((value, index) => {
            let i = `bk${index + 1}`;
            if (index < 3)
              return (
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
            value={srch}
            onChange={(e) => {Search(e.target.value)}}
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
      {show && (
        <>
          <BookReder srch="DSA" des={description} type={props.type} />
          <BookReder srch="MATHS" des={description} type={props.type} />
          <BookReder srch="COA" des={description} type={props.type} />
          <BookReder srch="COA" des={description} type={props.type} />
          <BookReder srch="ML" des={description} type={props.type} />
        </>
      )}
      {!show && (
        <>
          <hr />
          <div className="books-bottom " id="booksBottom">
            {props.type.map((value, index) => {
              if (value.name.toUpperCase().search(srch) !== -1) {
                return (
                  <div
                    id="book"
                    onClick={() =>description(index)}
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
        </>
      )}
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
    </div>
  );
}
