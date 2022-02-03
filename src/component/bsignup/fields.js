import React from 'react';
import Card from '../cards';
import Heading from '../heading';
import "./bstyle.css";

const Field = (props) => {
  return (
    <div className="home center">
      <div className="left" style={{ width: "80%" }}>
        <div className="heading">
          <Heading text="Sign up" size="8"/>
        </div>
        <div className="container">
          <div className="row">
            <Card
              title="Academics"
              text="Making continuous efforts to help and build up your future, Study Arena provides you with CSE and IT subjects related content, books and resources"
              btnText="Sign UP"
              btnlink="/form/signup"
              lastmsg="Already have an account?"
              lastword="Sign IN"
              lastlink="/field"
              typ="aup"
            />
            <Card
              title="Development"
              text="Study Arena aims to make elusive dreams come true and reinforce people's confidence hence advancing you with our development courses and practices."
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
