import React from 'react'

export default function Bk(props) {
  let i = "bk-4.jpg"
  return (
    <>
      <div className="book">
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
