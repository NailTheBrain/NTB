import axios from "axios";
const host = "http://localhost:5000/api/";


const Otpreq = async (props) => {
  let credentials = { email: props.email };
  const res = await axios.post(`${host}otp`, credentials)
    .catch(err => { return err.response })
  return res
}

const Otpresend = async (props) => {
  const res = await axios.post(`${host}otp/resend`, {},{
    headers: { 'auth-token': props.auth }
  })
    .catch(err => { return err.response })
  return res
}


export default { Otpreq,Otpresend };