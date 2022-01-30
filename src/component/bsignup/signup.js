import React from 'react';
import "./bstyle.css";

export default function Signup() {
  return (
    <>
      <div className="row">
        <form>
          <div className="mb-3">
            <label  className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone.
            </div>
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              // id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
             Re-enter Password
            </label>
            <input
              type="password"
              className="form-control"
              // id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
