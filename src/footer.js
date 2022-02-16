import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {

    window.addEventListener("scroll",()=>{
        if (window.scrollY >= (window.innerHeight )/6 ) document.getElementById("toTop").style.transform = "translateX(0px)";
        else document.getElementById("toTop").style.transform = "translateX(100px)";
    })

  return (
    <>
    <hr />
      <a href="#" className="toTop center" id="toTop">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div className="footer center">
        <div className="Fleft center">
          {/* <img src={require("../src/component/images/logo.png")} alt="" /> */}
          <div className="content">
            <h3>Nail the Brain</h3>
            <p>
              Nail the Brain is an online learning platform, making continuous
              efforts to help you build your future regardless of fact from
              which college you belong. We specifically provide the content,
              books, and roadmap related to CS and IT subject.
            </p>
          </div>
        </div>
        <div className="Fright center">
          <ul>
            <li>Support</li>
            <li>
              <i className="fa-solid fa-phone"></i>992724XXXX
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>nailthebrain@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-location-arrow"></i>Meerut
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
