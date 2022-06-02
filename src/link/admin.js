import axios from "axios";
const host = "http://localhost:5000/api/";


const Login = async () => {
    let credentials = {password: "abhinav@123",
                      email: "abhinav@gmail.com"};
    const res =  await axios.post(`${host}admin/login`,credentials)
    .catch(err => {return err.response})
    return res.data
  }

export default { Login };