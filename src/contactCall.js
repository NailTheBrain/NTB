import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContactCall() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ContactCall center">
        <div className="ContactShow center">
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div className="ContactHide center" onClick={()=> {window.scroll(0,0); navigate("/contact")}}>
          {/* <i className="fa-solid fa-comments"></i> */}
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>
    </>
  );
}
