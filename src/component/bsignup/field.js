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
              text="Making continuous efforts to help and build up your future, Study Arena provides you with CSE and IT subjects related content, books and resources"
              btnText="Sign IN"
              btnlink="/form/signin"
              lastmsg="Don't have an account?"
              lastword="Sign UP"
              lastlink="/fields"
              typ="ain"
            />
            <Card
              title="Development"
              text="Study Arena aims to make elusive dreams come true and reinforce people's confidence hence advancing you with our development courses and practices."
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
