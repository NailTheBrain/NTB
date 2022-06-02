import React from 'react'


export default function Bk(props) {
  return (
    <>
      <div className="book" data-tilt>
        <img src={require(`../../images/books/bk-2.jpeg`)} alt="" />
        <p>
          <span>
            <strong>Book name:</strong> {props.name}
          </span>
          <br />
          <span>
            <strong>Author:</strong> {props.author}
          </span>
          <br />
          <span>
            <strong>Branch:</strong> {props.branch}
          </span>
        </p>
      </div>
    </>
  );
}
