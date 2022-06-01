import React from 'react'
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Seeuser from './group/seeuser';

const Admin = () => {
    const navigate = useNavigate()
  return (
         <div className='op-data'>
          <nav className=" center navbar">
          <div className="rightlink center" onClick={() => navigate("/operator/admin")}>
            <img src={require("../component/images/logo.png")} alt="SA" />
            <span>
              <span>&nbsp;N</span>ail <span>T</span>he <span>B</span>rain
            </span>
          </div>
          <div className="leftlink center op-leftlink" onClick={() => navigate("/operator/admin")}>
              <h2>Admin</h2>
              <h2>➫ Logout</h2>
          </div>
          </nav>
        <Routes>
            <Route path="/" element={<div className='op-data' data-aos="zoom-out">
              <button className='button' onClick={()=>navigate('/operator/admin/login')}>See User</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Create User</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Delete User</button>
              <hr />
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>All Manager</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Create Manager</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Edit Manager</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Delete Manger</button>
              <hr />
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>All Books</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Add Book</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Delete Book</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Edit book</button>
            </div >} />
            <Route path="/user" element={<Seeuser/>}/>
        </Routes>
         </div>
  )
}

export default Admin