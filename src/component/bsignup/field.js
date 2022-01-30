import React from 'react';
import Card from '../cards';
import "./bstyle.css";

const Field = (props) => {
  return (
    <div className="home center">
      <div className="left" style={{ width: "80%" }}>
        <h1 className="heading">Sign IN</h1>
        <div className="container">
          <div className="row">
            <Card
              title="Academics"
              text="Data privacy is important to HackerRank, and when it comes to your data, we’re committed to protecting it and providing transparency about the information we collect from you and how we use it. "
              btnText="Sign IN"
              btnlink="/form/signin"
              lastmsg="Don't have an account?"
              lastword="Sign UP"
              lastlink="/fields"
              typ="ain"
            />
            <Card
              title="Development"
              text="Data privacy is important to HackerRank, and when it comes to your data, we’re committed to protecting it and providing transparency about the information we collect from you and how we use it. "
              btnText="Sign IN"
              btnlink="/form/signin"
              lastmsg="Don't have an account?"
              lastword="Sign UP"
              lastlink="/fields"
              typ="din"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
