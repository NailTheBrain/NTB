import axios from "axios";
const host = "http://localhost:5000/api/";


const Login = async (props) => {
  let credentials = {
    password: props.password,
    email: props.email
  };
  const res = await axios.post(`${host}user/login`, credentials)
    .catch(err => { return err.response })
    localStorage.clear();
  localStorage.setItem("authtoken", res.data.authtoken);
  return res
}


const Signup = async (props) => {
  let credentials = {
    password: props.password,
    email: props.email,
    name: props.name,
    onetimepassword: props.otp
  };
  console.log(credentials);
  const res = await axios.post(`${host}user/create`,
  credentials,
    {
      headers: {'auth-token': props.auth}
    },
)
    .catch(err => { return err.response })
    
  return res
}

const avalability = async (props) => {
  const res = await axios.get(`${host}user/check/${props.email}`)
    .catch(err => { return err.response })
    console.log(res)
  return res
}

const fetch = async(props)=>{
  let auth = localStorage.getItem('authtoken')
  if (!auth) {
    return false
  }

    const res =  await axios.post(`${host}user/fetch`,{},{
      headers: {
        'auth-token': auth
      },
  })
    .catch(err => {return err.response})

    return res
}
export default { Login, Signup,avalability,fetch };