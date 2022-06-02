import axios from "axios";
const host = "http://localhost:5000/api/";

const All = async (props) => {
    let auth = localStorage.getItem('authtoken')
  if (!auth) {
    return false
  }
    const res =  await axios.get(`${host}search/all`,{
      headers: {
        'auth-token': auth
      },
  })
    .catch(err => {return err.response})
    return res
}

export default { All};