import React from "react";
import Heading from "../../heading";
// import Books from "./books"
// import Contact from "./contact";
// import Exam from "./exam";


const Home = () => {
  return (
    <>
      <div className="home center">
        <div className="left">
          <h2>
            <strong>Academics</strong>
          </h2>
          <p style={{ fontSize: "2rem" }}>
            Study Arena is an online learning platform, making continuous
            efforts to help you build your future regardless of fact from which
            college you belong. We specifically provide the content, books, and
            roadmap related to CSE and IT subject. Here you will get a holistic
            range of resources for the preparation of not just university exams
            but also exams like GATE.
          </p>
        </div>
        <img src={require("../../images/img-2.png")} alt="" />
      </div>
    <hr />
      {/* books */}
      <div className="hover-scale">
        <Heading text="Books" size="12" />
        <div className="home center">
          <img src={require("../../images/img-3.png")} alt="" />
          <div className="left1">
            <p style={{ fontSize: "2rem" }}>
              Study Arena is an online learning platform, making continuous
              efforts to help you build your future regardless of fact from
              which college you belong. We specifically provide the content,
              books, and roadmap related to CSE and IT subject. Here you will
              get a holistic range of resources for the preparation of not just
              university exams but also exams like GATE.
            </p>
            <button className="button">EXPLORE</button>
          </div>
        </div>
      </div>
    <hr />
      {/* Exam */}
      <div className="hover-scale">
        <Heading text="Exam" size="12" />
        <div className="home center">
          <div className="left1">
            <p style={{ fontSize: "2rem" }}>
              Study Arena is an online learning platform, making continuous
              efforts to help you build your future regardless of fact from
              which college you belong. We specifically provide the content,
              books, and roadmap related to CSE and IT subject. Here you will
              get a holistic range of resources for the preparation of not just
              university exams but also exams like GATE.
            </p>
            <button className="button">EXPLORE</button>
          </div>
          <img src={require("../../images/img-4.png")} alt="" />
        </div>
      </div>

      {/* contact section */}
      <div className="contact center">
        <div className="Cright">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986393.3373683696!2d70.5852366625!3d19.0974187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994afbc6de9%3A0xd36760e4a1a77177!2sJuhu%20Beach!5e1!3m2!1sen!2sin!4v1643899889125!5m2!1sen!2sin"
            loading="lazy"
            title="map"
          ></iframe>
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
    </>
  );
};

export default Home;
