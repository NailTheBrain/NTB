import React from "react";

export default function Alert(props) {

  return (
    <>
      {props.show && (
        <>
          <div
            className="AletContainer center"
            data-aos="flip-up"
            data-aos-delay="0"
          >
            <div
              className="AlertUpper center"
              data-aos="slide-down"
              data-aos-delay="250"
            >
              <div data-aos="zoom-in" data-aos-delay="800">
                {props.warn != 1 && props.warn != 2 && (
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "green" }}
                  ></i>
                )}
                {props.warn === 2 && (
                  <i
                    className="fa-solid fa-exclamation"
                    style={{ color: "orange" }}
                  ></i>
                )}
                {props.warn === 1 && (
                  <i className="fa-solid fa-xmark" style={{ color: "red" }}></i>
                )}
              </div>
            </div>
            <div className="AlertBottom">
              <h3>{props.text}</h3>
            </div>
            <div className="AlertClose">
              <button className="button" onClick={() => props.setShow(false)}>
                COOL!!
              </button>
            </div>
          </div>
          <div className="AlertBack" onClick={() => props.setShow(false)}></div>
        </>
      )}
    </>
  );
}

//to ue
// Alert start
//
// const [showAlert, setshowAlert] = useState(false);
// const [textAlert, settextAlert] = useState("");
// const [warnAlert, setwarnAlert] = useState();
//
//<Alert show={showAlert} setShow={setshowAlert} text={textAlert} warn={warnAlert} />

//1 -> wrong
//2->warning
//3->ok
//
// Alert end
