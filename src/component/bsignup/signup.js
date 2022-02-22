import React from 'react';
import "./bstyle.css";
import { passCheck, showCall } from "./passCheck";
import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {

  let navigate = useNavigate();
  const data = useLocation().state.type;
  let show;
  let showmail;
  data === "aup" ? (show = "Academics") : (show = "Development");
  data === "aup"
    ? (showmail = "Please enter student mail id")
    : (showmail = "We'll never share your email with anyone.");

  //  for animation of words
    useEffect(() => {
       let input = document.querySelectorAll(".inputDes");
       input.forEach((e) => {
         e.innerHTML = e.innerText
           .split("")
           .map(
             (des, indx) =>
               `<span style="transition-delay:${indx * 40}ms" >${des}</span>`
           )
           .join("");
       });
    }, [])
    


    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [conPass, setconPass] = useState("");
  const [password, setPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState(false);

  function chkfname(e){
     e = e.toUpperCase()
       if(e.length>=1){
         if (e[e.length - 1].match(/[A-Z]/))
           setFName(e);
       }else setFName(e);
    }
  function chklname(e){
     e = e.toUpperCase()
       if(e.length>=1){
         if (e[e.length - 1].match(/[A-Z]/))
           setLName(e);
       }else setLName(e);
    }
  function passcheckcall(e) {
    let chk = passCheck(e);
    chk
      ? (document.querySelector("#passmsg").style.display = "none")
      : (document.querySelector("#passmsg").style.display = "block");
    setPassword(chk);
    setPass(e)
  }
  function conpasscheckcall(e) {
    let x = document.getElementById("password").value;
    let y = document.getElementById("passmach");
    x === e
      ? (document.querySelector("#passmsg").style.display = "none")
      : (document.querySelector("#passmsg").style.display = "block");
    x === e ? (y.style.display = "none") : (y.style.display = "block");
    setconfirmPassword(x === e);
    setconPass(e);
  }


  function sub() {
    if (data === "ain" && mail.split("@")[1] !== "miet.ac.in") {
      toast.error("Please enter valid student mail id 😕", {
        position: "top-center",
      });
      setMail("");
    } else if (!password) {
      toast.error("Please enter Password with right validation 😕", {
        position: "top-center",
      });
    } else if (!confirmPassword)
      toast.error("Please Match the Password 😕", {
        position: "top-center",
      });
    else {
      toast.success(" Done 👌", {
        position: "top-center",
      });
      navigate("/academics");
    }
  }


  return (
    <>
      <div className="row center">
        <center>
          <h2>{show}</h2>
          <h2>Sign UP</h2>
        </center>
        <form>
          <div className="mb-3 ">
            <div className="center" style={{ justifyContent: "space-between" }}>
              <div className="input1">
                <input
                  type="text"
                  className="form-control input"
                  value={fname}
                  onChange={(e) => chkfname(e.target.value)}
                  maxLength="10"
                  style={{ width: "95%" }}
                  required
                />
                <div className="inputDes">First Name</div>
              </div>
              <div className="input1">
                <input
                  type="text"
                  className="form-control input"
                  value={lname}
                  onChange={(e) => chklname(e.target.value)}
                  maxLength="10"
                  style={{ width: "95%" }}
                  required
                />
                <div className="inputDes">Last Name</div>
              </div>
            </div>
          </div>
          <div className="mb-3 input1">
            <input
              type="email"
              className="form-control input"
              onChange={(e) => setMail(e.target.value)}
              aria-describedby="emailHelp"
              value={mail}
              required
            />
            <div className="inputDes">Email-id</div>
          </div>
            <div id="emailHelp" className="form-text">
              {showmail}
            </div>
          <div className="mb-3 pass input1">
            <input
              type="password"
              className="form-control input"
              id="password"
              onChange={(e) => passcheckcall(e.target.value)}
              value={pass}
              required
            />
            <div className="inputDes">Password</div>
            <i
              className="far fa-eye"
              id="showpass"
              onClick={(e) => showCall(e.target)}
            ></i>
          </div>
          <div className="mb-3 pass input1">
            <input
              type="password"
              className="form-control input"
              onChange={(e) => conpasscheckcall(e.target.value)}
              value={conPass}
              required
            />
            <div className="inputDes">Re-Enter Password</div>
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
          <button type="button" className="button" onClick={() => sub()}>
            Submit
          </button>
          <p onClick={() => navigate("/field")}>
            Already have an acccount? <span>Sign IN</span>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
