import React from 'react'
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

const Manager = () => {
  const navigate= useNavigate();
  return (
     <div>
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
            <Route path="/" element={<div className='op-data center row' data-aos="zoom-out">
              <button className='button' onClick={()=>navigate('/operator/admin/login')}>See User</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Create User</button>
              <hr />
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>All Books</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Add Book</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Delete Book</button>
              <button className='button' onClick={()=>navigate('/operator/manager/login')}>Edit book</button>
            </div >} />
            {/* <Route path="/manager/login" element={<ManagerLog/>} />
            <Route path="/admin/login" element={<AdminLog/>} />
            <Route path="/admin/*" element={<Admin/>} />
            <Route path="/manager/*" element={<Manager/>} /> */}
        </Routes>
         </div>
  )
}

export default Manager