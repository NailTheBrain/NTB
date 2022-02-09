import React from 'react';
import "./compstyle.css"
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  let navigate= useNavigate();
  const link = props.btnlink
  const link2 = props.lastlink
  const types = props.typ
  return (
    <div className="col-sm-6 card" style={{ padding: "0" }}>
      {/* <div className="card"> */}
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.text}</p>
          <button onClick={() => navigate(link, {state:{type : types}})} className="btn btn-primary">
            {props.btnText}
          </button>
          <p  onClick={() => navigate(link2)}>
            {props.lastmsg} <span> {props.lastword}</span>
          </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Cards;
