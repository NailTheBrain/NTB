import React from "react";
import Heading from "../../heading";

export default function Contact() {
   
  return (
    <>
      <div className="contact center">
        <div className="Cright ">
          <Heading text="contact" size="8" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nulla esse illo quod dolores nesciunt perferendis enim minima
            accusantium laudantium asperiores, reprehenderit culpa dolorem ad ut
            a sed quis itaque? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Veniam nulla esse illo quod dolores nesciunt
            perferendis enim minima accusantium laudantium asperiores,
            reprehenderit culpa dolorem ad ut a sed quis itaque?
          </p>
        </div>
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
          <button type="button" className="button">
            Submit
          </button>
        </form>
      </div>
      <div className="contactMap center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115315.39079588535!2d77.62892002165816!3d28.98739421460625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1644497334351!5m2!1sen!2sin"
          title="aa"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
