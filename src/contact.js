import React ,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Heading from "./component/heading";
import Footer from "./footer.js";


export default function Contact() {
  const navigate = useNavigate();
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
  });

  return (
    <>
      <div className="Contact">
        <nav className=" center">
          <div className="rightlink center" onClick={() => navigate("/")}>
            <img src={require("./component/images/logo.png")} alt="SA" />
            <span>
              <span>&nbsp;N</span>ail <span>T</span>he <span>B</span>rain
            </span>
          </div>
        </nav>
        <div className="contact center">
          <div className="Cright ">
            <Heading text="contact" size="8" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              nulla esse illo quod dolores nesciunt perferendis enim minima
              accusantium laudantium asperiores, reprehenderit culpa dolorem ad
              ut a sed quis itaque? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Veniam nulla esse illo quod dolores nesciunt
              perferendis enim minima accusantium laudantium asperiores,
              reprehenderit culpa dolorem ad ut a sed quis itaque?
            </p>
          </div>
          <form className="Cleft ">
            <div className="mb-3 ">
              <div
                className="center"
                style={{ justifyContent: "space-between" }}
              >
                <div className="input1">
                  <input
                    type="text"
                    className="form-control input"
                    maxLength="10"
                    style={{ width: "95%" }}
                    required
                  />
                  <div className="inputDes">First</div>
                </div>
                <div className="input1">
                  <input
                    type="text"
                    className="form-control input"
                    maxLength="10"
                    style={{ width: "95%" }}
                  />
                  <div className="inputDes">Last</div>
                </div>
              </div>
            </div>
            <div className="mb-3 input1">
              <input
                type="email"
                className="form-control input"
                aria-describedby="emailHelp"
              />
              <div className="inputDes">Email-id</div>
            </div>
            <div className="mb-3 input1">
              <textarea name="" id="" className="input"></textarea>
              <div className="inputDes">Message</div>
            </div>

            <button type="button" className="button">
              Submit
            </button>
          </form>
        </div>
        <div className="contactMap center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115315.39079588535!2d77.62892002165816!3d28.98739421460625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1644497334351!5m2!1sen!2sin"
            title="aa"
            loading="lazy"
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
}
