import React from "react";
import Books from "./books"
import Contact from "./contact";
import Exam from "./exam";


const Home = () => {
  return (
    <>
      <div className="home center">
        <div className="left">
          <h2>
            <strong>Academics</strong>
          </h2>
          <p style={{fontSize:"2rem"}}>
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
      <Books/>
      <Exam/>
      <Contact/>
    </>
  );
};

export default Home;
