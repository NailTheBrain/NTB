import React from 'react'
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import ManagerLog from "./managerLog"
import AdminLog from "./adminLog"
import "./operator.css"
import Admin from './admin';
import Manager from './manager';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="Main center ">
      <Routes>
        <Route path="/" element={<div className='op-data center row' data-aos="zoom-out">
          <button className='button' onClick={()=>navigate('/operator/admin/login')}>👨🏻‍💼 Admin</button>
          <button className='button' onClick={()=>navigate('/operator/manager/login')}>🧑🏻‍💻 Manger</button>
        </div >} />
        <Route path="/manager/login" element={<ManagerLog/>} />
        <Route path="/admin/login" element={<AdminLog/>} />
        <Route path="/admin/*" element={<Admin/>} />
        <Route path="/manager/*" element={<Manager/>} />
      </Routes>
    </div>
  )
}

export default Main