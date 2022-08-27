import React, { useState } from 'react'
import linkotp from '../../link/otp'

const Otp = (props) => {

  const run = (a, b, c) => {
    if (document.getElementById(c).value === "") {
      document.getElementById(a).focus()
      document.getElementById(c).classList.remove("otp-clr")
    }
    else if (!(document.getElementById(c).value.match(/[0-9]/)))
      document.getElementById(c).value = ""
    else {
      document.getElementById(b).focus()
      document.getElementById(c).classList.add("otp-clr")
      if (c === "VI") {
        let val = ""
        val += document.getElementById("I").value
        val += document.getElementById("II").value
        val += document.getElementById("III").value
        val += document.getElementById("IV").value
        val += document.getElementById("V").value
        val += document.getElementById("VI").value
        if (val.length === 6)
          chk(val)
        else {
          alert("Fill all Input field")
          document.querySelectorAll(".txt").forEach((e) => {
            e.value = ""
          })
          document.getElementById("I").focus()
        }
      }
    }
  }
  const chk = (a) => {
    props.setloading(true)
    props.setotp(a)
  }

  if (props.otp.length === 0) {
    document.querySelectorAll(".txt").forEach((e) => {
      document.querySelector("#I").focus()
      e.value = ""
      e.classList.remove("otp-clr")
    })
  }
  // resending the otp
  const [res, setres] = useState(false)
  resshow()
  function resshow() {
    let temp = setInterval(() => {
      setres(true)
      clear()
    }, 1000 * 60 * 1.5);
    function clear() {
      clearInterval(temp)
    }
  }
  const resend = async () => {
    setres(false)
    let a = await linkotp.Otpresend({
      auth: props.token
    })
    if (a.data.success) {
      alert("Otp resended")
    } else {
      alert("Some internal error please try later on..")
    }
  }
  return (
    <>

      {/* {(props.show || props.toggle) && <>
        {props.show ? (
          <div className="close-otp" onClick={() => { props.setshow(false) }}>
            ✘
          </div>
        ) : (<div className="close-otp" onClick={() => props.setshow(true)}>
          ✍︎ OTP
        </div>)}
      </>} */}

      {props.show && (
        <div className='otp' >
          <div className="otp-box center col">
            <div className="logo-holder">
              <div className="bg"></div>
              <div className="bar"></div>
              <div className="bar fill1"></div>
              <div className="bar fill5"></div>
              <div className="bar fill3"></div>
              <div className="bar fill4"></div>
              <div className="bar fill2"></div>
              <div className="bar fill5"></div>
              <div className="bar fill6"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar fill1"></div>
              <div className="bar fill2"></div>
              <div className="bar fill3"></div>
              <div className="bar fill5"></div>
              <div className="bar fill1"></div>
              <div className="bar fill5"></div>
              <div className="bar fill6"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar fill1"></div>
              <div className="bar fill2"></div>
              <div className="bar fill6"></div>
              <div className="bar fill4"></div>
              <div className="bar fill1"></div>
              <div className="bar fill5"></div>
              <div className="bar fill1"></div>
            </div>
            <h3>OTP</h3>
            <div className="otp-text center " id='text-box'>
              <input type="text" className='txt' id='I' autoFocus maxLength={1} onKeyUp={() => run("I", "II", "I")} />
              <input type="text" className='txt' id='II' maxLength={1} onKeyUp={() => run("I", "III", "II")} />
              <input type="text" className='txt' id='III' maxLength={1} onKeyUp={() => run("II", "IV", "III")} />
              <input type="text" className='txt' id='IV' maxLength={1} onKeyUp={() => run("III", "V", "IV")} />
              <input type="text" className='txt' id='V' maxLength={1} onKeyUp={() => run("IV", "VI", "V")} />
              <input type="text" className='txt' id='VI' maxLength={1} onKeyUp={() => run("V", "VI", "VI")} />
              {res && (<div className='otp-resend' onClick={resend}>Resend</div>)}
            </div>
            {props.loading && (<h2>
              <div>Loading.....</div>
              <div className="spinner-grow text-primary" role="status"></div>
              <div className="spinner-grow text-secondary" role="status"></div>
              <div className="spinner-grow text-success" role="status"></div>
              <div className="spinner-grow text-danger" role="status"></div>
              <div className="spinner-grow text-warning" role="status"></div>
              <div className="spinner-grow text-info" role="status"></div>
              <div className="spinner-grow text-light" role="status"></div>
            </h2>)}
          </div>

        </div>
      )}
    </>
  )
}

export default Otp