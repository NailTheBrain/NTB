import React from 'react';
import Card from "../cards"
import "./bstyle.css";

const Home = () => {
  return (
    <>
      <div className="home center " style={{position:"relative",top:"10rem"}} data-aos="zoom-out">
        <div className="left">
          <h1>We develop leaders, who develop people, who develop business.</h1>
          <div className="container">
            <div className="row">
              <Card
                title="Academics"
                text="Making continuous efforts to help and build up your future, Nail the Brain provides you with CSE and IT subjects related content, books and resources"
                btnText="Read More"
                btnlink="/fields"
              />
              <Card
                title="Development"
                text="Nail the Brain aims to make elusive dreams come true and reinforce people's confidence hence advancing you with our development courses and practices."
                btnText="Read More"
                btnlink="/fields"
              />
            </div>
          </div>
        </div>
        <img src={require("../images/img-1.png")} className="homeimg" alt="" />
      </div>
    </>
  );
};

export default Home;
