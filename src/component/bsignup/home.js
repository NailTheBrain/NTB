import React from 'react';
import Card from "../cards"
import "./bstyle.css";

const Home = () => {
  return (
    <>
      <div className="home center">
        <div className="left">
          <h1>
            Data privacy is important to HackerRank, and when it comes to your
            data
          </h1>
          <div className="container">
            <div className="row">
              <Card
                title="Academics"
                text="Making continuous efforts to help and build up your future, Study Arena provides you with CSE and IT subjects related content, books and resources"
                btnText="Read More"
                btnlink="/fields"
              />
              <Card
                title="Development"
                text="Study Arena aims to make elusive dreams come true and reinforce people's confidence hence advancing you with our development courses and practices."
                btnText="Read More"
                btnlink="/fields"
              />
            </div>
          </div>
        </div>
        <img src={require("../images/img-1.png")} alt="" />
      </div>
    </>
  );
};

export default Home;
