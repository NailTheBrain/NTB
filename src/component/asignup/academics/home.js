import React from "react";
import Heading from "../../heading";
import { useNavigate } from "react-router-dom";
// import Books from "./books"
// import Contact from "./contact";
// import Exam from "./exam";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="no-scroll">
      <div className="home center hover-scale">
        <div className="left">
          <h2>
            <strong>Academics</strong>
          </h2>
          <p style={{ fontSize: "2rem" }}>
            <strong>Nail the Brain</strong> is an online learning platform,
            making continuous efforts to help you build your future regardless
            of fact from which college you belong. We specifically provide the
            content, books, and roadmap related to CS and IT subject. Here you
            will get a holistic range of resources for the preparation of not
            just university exams but also exams like GATE.
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
              The beginning is the most precious part of the work. No one can
              afford to stand by and do nothing, so grab limitless opportunities
              from here. Find the books related to subjects of CSE and IT. Check
              them out!!!
            </p>
            <button
              className="button"
              onClick={() => {
                navigate("/academics/books");
                window.scrollTo(0, 0);
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
      <hr />
      {/* Exam */}
      <div className="hover-scale">
        <Heading text="Exam" size="12" />
        <div className="home center">
          <div className="left1" data-aos="flip-down" data-aos-delay="200">
            <p style={{ fontSize: "2rem" }}>
              Building a future generation of innovation means setting up the
              youth for success. <br />
              In this segment, you can download pdfs, and attempt the previous
              year's question papers of exams like GATE to improve your
              preparation. Analyze, plan and then execute, offering the roadmap
              and strategies to achieve your desires
            </p>
            <button
              className="button"
              onClick={() => {
                navigate("/academics/exams");
                window.scrollTo(0, 0);
              }}
            >
              EXPLORE
            </button>
          </div>
          <img
          className=""
            src={require("../../images/img-4.png")}
            alt=""
            data-aos="slide-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
