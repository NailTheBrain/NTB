import React from 'react';
import Card from '../cards';
import { Outlet } from 'react-router-dom';
import "./bstyle.css";

const Field = (props) => {
  return (
    <div className="home center">
      <div className="left" style={{ width: "80%" }}>
        <h1 className="heading">Sign UP</h1>
        <div className="container">
          <div className="row">
            <Card
              title="Academics"
              text="Data privacy is important to HackerRank, and when it comes to your data, we’re committed to protecting it and providing transparency about the information we collect from you and how we use it. "
              btnText="Sign UP"
              btnlink="/form/signup"
              lastmsg="Already have an account?"
              lastword="Sign IN"
              lastlink="/field"
              typ="aup"
            />
            <Card
              title="Development"
              text="Data privacy is important to HackerRank, and when it comes to your data, we’re committed to protecting it and providing transparency about the information we collect from you and how we use it. "
              btnText="Sign UP"
              btnlink="/form/signup"
              lastmsg="Already have an account?"
              lastword="Sign IN"
              lastlink="/field"
              typ="dup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
