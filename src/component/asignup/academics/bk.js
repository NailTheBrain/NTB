import React from 'react'


export default function Bk(props) {
  return (
    <>
      <div className="book" data-tilt>
        <img src={require(`../../images/books/${props.img}`)} alt="" />
        <p>
          <span>
            <strong>Book name:</strong> {props.name}
          </span>
          <br />
          <span>
            <strong>details:</strong> {props.text}
          </span>
        </p>
      </div>
    </>
  );
}
