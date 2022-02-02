import React from 'react';
import "./bstyle.css";
import { passCheck, showCall } from "./passCheck";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate();
  const data = useLocation().state.type;
  let show;
  let showmail;
  data === "aup" ? (show = "Academics") : (show = "Development");
  data === "aup"
    ? (showmail = "Please enter student mail id")
    : (showmail = "We'll never share your email with anyone.");



  const [password, setPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState(false);
  const [mail, setMail] = useState("");
  function passcheckcall(e) {
    let chk = passCheck(e);
    chk
      ? (document.querySelector("#passmsg").style.display = "none")
      : (document.querySelector("#passmsg").style.display = "block");
    setPassword(chk);
  }
  function conpasscheckcall(e) {
    let x = document.getElementById("password").value;
    let y = document.getElementById("passmach");
    x === e
      ? (document.querySelector("#passmsg").style.display = "none")
      : (document.querySelector("#passmsg").style.display = "block");
    x === e ? (y.style.display = "none") : (y.style.display = "block");
    setconfirmPassword(x === e);
  }

  function sub() {
    if (data === "aup" && mail.split("@")[1] !== "miet.ac.in") {
      alert("Please enter valid student mail id");
      setMail("");
    } else if (!password) 
      alert("Enter Password with correct validation as shown");
      else if(!confirmPassword)
      alert("Password not matched");
      else alert("Done");
  }

  return (
    <>
      <div className="row">
        <center>
          <h2>{show} Sign UP</h2>
        </center>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setMail(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              {showmail}
            </div>
          </div>
          <div className="mb-3 pass">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => passcheckcall(e.target.value)}
            />
            <i
              className="far fa-eye"
              id="showpass"
              onClick={(e) => showCall(e.target)}
            ></i>
          </div>
          <div className="mb-3 pass">
            <label className="form-label">Re-enter Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => conpasscheckcall(e.target.value)}
            />
            <i
              className="far fa-eye"
              id="showpass"
              onClick={(e) => showCall(e.target)}
            ></i>
          </div>
          <div id="passmsg">
            <h4 className="passmsg">
              <i className="fas fa-times"></i> Enter Atleast <strong>8</strong>{" "}
              digit
            </h4>
            <h4 className="passmsg">
              <i className="fas fa-times"></i> Enter <strong>number</strong>{" "}
              also
            </h4>
            <h4 className="passmsg">
              <i className="fas fa-times"></i> Enter <strong>capital</strong>{" "}
              letter
            </h4>
            <h4 className="passmsg">
              <i className="fas fa-times"></i> Enter <strong>small</strong>{" "}
              letter
            </h4>
            <h4 className="passmsg">
              <i className="fas fa-times"></i> Use <strong>Symbol</strong>
            </h4>
            <h4 id="passmach" className="passmsg">
              <i className="fas fa-times"></i> Password not{" "}
              <strong>matched</strong>
            </h4>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => sub()}
          >
            Submit
          </button>
          <p onClick={() => navigate("/field")}>
            Already have an acccount? <span>Sign IN</span>
          </p>
        </form>
      </div>
    </>
  );
}
