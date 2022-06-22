import axios from "axios";
const host = "http://localhost:5000/api/";


const Otpreq = async (props) => {
    let credentials = {email: props.email};
    const res =  await axios.post(`${host}otp`,credentials)
    .catch(err => {return err.response})
    // localStorage.setItem("authtoken", res.data.authtoken);
    return res
  }


export default { Otpreq};