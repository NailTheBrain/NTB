import React, { useState } from 'react'

const Otp = () => {

  const [dis, setdis] = useState("block")

  const run = (a, b, c) => {
    if (document.getElementById(c).value === "")
     { 
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
        if(val.length === 6)
          chk(val)
        else
          alert("Fill all Input field")
          document.querySelectorAll(".txt").forEach((e) => {
            e.value = ""
          })
          document.getElementById("I").focus()
      }
    }
  }
  const chk = (a) => {
    if (a !== "111111") {
      document.querySelectorAll(".txt").forEach((e) => {
        e.value = ""
        e.classList.remove("otp-clr")
      })
      document.getElementById("text-box").classList.add("otp-err")
      document.getElementById("I").focus()
      setTimeout(() => {
        document.getElementById("text-box").classList.remove("otp-err")
      }, 900)
    }
  }

  return (
    <div style={{ display: dis }}>
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
            <input type="text" className='txt' id='I' autoFocus  maxLength={1} onKeyUp={() => run("I", "II", "I")} />
            <input type="text" className='txt' id='II' maxLength={1} onKeyUp={() => run("I", "III", "II")} />
            <input type="text" className='txt' id='III' maxLength={1} onKeyUp={() => run("II", "IV", "III")} />
            <input type="text" className='txt' id='IV' maxLength={1} onKeyUp={() => run("III", "V", "IV")} />
            <input type="text" className='txt' id='V' maxLength={1} onKeyUp={() => run("IV", "VI", "V")} />
            <input type="text" className='txt' id='VI' maxLength={1} onKeyUp={() => run("V", "VI", "VI")} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Otp