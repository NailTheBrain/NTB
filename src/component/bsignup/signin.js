import React from 'react';
import { passCheck, showCall } from "./passCheck";
import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./bstyle.css";





export default function Signin() {
    const navigate = useNavigate();
    const data = useLocation().state.type;
    let show;
    let showmail;
    data === "ain" ? (show = "Academics") : (show = "Development");
    data === "ain"
      ? (showmail = "Please enter student mail id")
      : (showmail = "We'll never share your email with anyone.");
  const [password, setPassword] = useState(false);
  const [mail, setMail] = useState("");



  function passcheckcall(e) {
    let chk = passCheck(e);
    chk
      ? (document.querySelector("#passmsg").style.display = "none")
      : (document.querySelector("#passmsg").style.display = "block");
    setPassword(chk);
  }

  function sub(){
    if (data === "ain" && mail.split("@")[1]!=="miet.ac.in"){
      alert("Please enter valid student mail id");
      setMail("")
    }
    else if(!password){
      alert("Enter Password with correct validation as shown")
    }else alert("Done")
  }

  return (
    <>
      <div className="row">
        <center>
          <h2>{show} Sign IN</h2>
        </center>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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
              onChange={(e) => passcheckcall(e.target.value)}
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
          <p onClick={() => navigate("/fields")}>
            Already have an acccount? <span>Sign UP</span>
          </p>
        </form>
      </div>
    </>
  );
}
