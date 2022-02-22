import React from 'react';
import { passCheck, showCall } from "./passCheck";
import { useState,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./bstyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


 


export default function Signin() {
  const navigate = useNavigate();
   let data = useLocation().state;
  let show;
  let showmail;
  data === "ain" ? (show = "Academics") : (show = "Development");
  data === "ain"
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
    if (data === null) navigate("/field");
    else data = data.type;
  }, []);

  const [password, setPassword] = useState(false);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function passcheckcall(e) {
    let chk = passCheck(e);
    chk
      ? (document.querySelector("#passmsg").style.display = "none")
      : (document.querySelector("#passmsg").style.display = "block");
    setPassword(chk);
    setPass(e);
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
    } else {
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
          <h2> Sign IN</h2>
        </center>
        <form>
          <div className="mb-3 input1">
            <input
              type="email"
              className="form-control input"
              aria-describedby="emailHelp"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <div className="inputDes">Mail-Id</div>
          </div>
          <div id="emailHelp" className="form-text">
            {showmail}
          </div>
          <div className="mb-3 pass input1">
            <input
              type="password"
              className="form-control input"
              onChange={(e) => passcheckcall(e.target.value)}
              value={pass}
            />
            <div className="inputDes">Password</div>
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
          <p onClick={() => navigate("/fields")}>
            Already have an acccount? <span>Sign UP</span>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
