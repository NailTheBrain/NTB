import React from "react";
// import Heading from "../../heading";

export default function Contact() {
   
  return (
    <>
      <div className="contact center">
        <form className="Cleft ">
          <div className="mb-3 ">
            <div className="center" style={{ justifyContent: "space-between" }}>
              <input
                type="text"
                className="form-control"
                maxLength="10"
                style={{ width: "45%" }}
                placeholder="First"
              />
              <input
                type="text"
                className="form-control"
                maxLength="10"
                style={{ width: "45%" }}
                placeholder="Last"
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email id"
            />
          </div>
          <div className="mb-3">
            <textarea name="" id="" placeholder="Message"></textarea>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="Cright">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986393.3373683696!2d70.5852366625!3d19.0974187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994afbc6de9%3A0xd36760e4a1a77177!2sJuhu%20Beach!5e1!3m2!1sen!2sin!4v1643899889125!5m2!1sen!2sin"
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </>
  );
}
