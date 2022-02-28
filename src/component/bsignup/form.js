import React from 'react';
import { Outlet} from 'react-router-dom';
import "./bstyle.css";

export default function Form() {
  return (
    <>
      <div className="form center" >
        <div className="center links">
          <h1></h1>
        </div>
        <Outlet />
      </div>
    </>
  );
}
