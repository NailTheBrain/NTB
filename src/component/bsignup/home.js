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
                text="Data privacy is important to HackerRank, and when it comes to your data, we’re committed to protecting it and providing transparency about the information we collect from you and how we use it. "
                btnText="Read More"
                btnlink="/fields"
              />
              <Card
                title="Development"
                text="Data privacy is important to HackerRank, and when it comes to your data, we’re committed to protecting it and providing transparency about the information we collect from you and how we use it. "
                btnText="Read More"
                btnlink="/fields"
              />
            </div>
          </div>
        </div>
        <img src={require("../images/img-1.jpg")} alt="" />
      </div>
    </>
  );
};

export default Home;
