import axios from "axios";
const host = "http://localhost:5000/api/";


const Login = async (props) => {
    let credentials = {password: props.password,
                      email: props.email};
    const res =  await axios.post(`${host}user/login`,credentials)
    .catch(err => {return err.response})
    return res
  }
const Signup = async (props) => {
    let credentials = {password: props.password,
                      email: props.email,
                      name:props.name};
    const res =  await axios.post(`${host}user/create`,credentials)
    .catch(err => {return err.response})
    return res
  }

export default { Login,Signup };