import React from 'react';
import Card from '../cards';
import "./bstyle.css";
import Heading from "../heading";

const Field = (props) => {
  return (
    <div className="home center">
      <div className="left" style={{ width: "100%" }}>
        <div className="heading">
          <Heading text="Sign in" size="12" />
        </div>
        <div className="content center">
          <Card
            title="Academics"
            text="Making continuous efforts to help and build up your future, Nail the Brain provides you with CSE and IT subjects related content, books and resources"
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
  );
};

export default Field;
