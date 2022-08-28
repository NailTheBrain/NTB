import React from 'react'
import Heading from "../../heading";
import { Link, Route, Routes } from "react-router-dom";

const Profile = () => {
    return (
       <>
            <Routes>
                <Route path='/' element={<Main_profile/>}/>
                <Route path='/change-password' element={<ChangePass/>}/>
            </Routes>
       </>
    )
}

export default Profile

const Main_profile = ()=>{
    return(
        <div className="profile center col">
        <Heading text="Hello👋 &#160;Abhishek Singhal" size="8" />
        <div className="profile_inner" >
            <span>Email</span>
            <div>
                <input type="email" />
            </div>
        </div>
        <div className="profile_inner">
            <span>Password</span>
            <div className="hover-scale">
                <Link to={"/academics/profile/change-password"} >
                    Change Password
                </Link>
            </div>
        </div>
        <div className="profile_inner">
            <span>Gender</span>
            <div style={{fontSize:'3rem'}}>
                <input type="radio" name="gen" title='male'/>&#160;&#160;👱‍♂️
                <input type="radio" name="gen" title='female'/>&#160;&#160;👩
            </div>
        </div>
        <div className="profile_inner">
            <span>Age</span>
            <div>
                <input type="number" />
            </div>
        </div>
        <div className="profile_inner">
            <span>DOB</span>
            <div>
                <input type="date" />
            </div>
        </div>
        <div className="profile_inner">
            <span>Occupation</span>
            <div>
                <input type="email" />
            </div>
        </div>
        <div className="profile_inner">
            <span>Phone no.</span>
            <div>
                <input type="number" />
            </div>
        </div>
        <div className="profile_inner">
            <span>Pincode</span>
            <div>
                <input type="number" />
            </div>
        </div>
        <div className="profile_inner">
            <span>City</span>
            <div>
                <input type="email" />
            </div>
        </div>
        <div className="profile_inner">
            <span>State</span>
            <div>
                <input type="email" />
            </div>
        </div>
        <div className="profile_inner">
            <span>Country</span>
            <div>
                <input type="email" />
            </div>
        </div>

    </div>
    )
}

const ChangePass = ()=>{
    const show = (e)=>{
        if(e.classList.contains("fa-eye")){
            e.classList.add("fa-eye-slash")
            e.classList.remove("fa-eye")
            e.previousSibling.type="text"
            e.title="hide"
        }else{
            e.classList.remove("fa-eye-slash")
            e.classList.add("fa-eye")
            e.previousSibling.type="password"
            e.title="show"
        }
    }
    return(
        <>
            <div className="main center col changepass">
            <Heading text="Change password 🧑🏻‍💻" size="8" />
                <div className="changepassIn center">
                    <span>Old Password</span>
                    <div className='center'>
                        <input type="password" name="" id="" />
                        <i className="fa-solid fa-eye" onClick={(e)=>show(e.target)} title="show"></i>
                    </div>
                </div>
                <div className="changepassIn center">
                    <span>New Password</span>
                    <div className='center'>
                        <input type="password" name="" id="" />
                        <i className="fa-solid fa-eye" onClick={(e)=>show(e.target)} title="show"></i>
                    </div>
                </div>
                <div className="changepassIn center">
                    <span>Confirm New Password</span>
                    <div className='center'>
                        <input type="password" name="" id="" />
                        <i className="fa-solid fa-eye" onClick={(e)=>show(e.target)} title="show"></i>
                    </div>
                </div>
                <div className="changepassIn">
                    <button className='button'>Change</button>
                </div>
            </div>
        </>
    )
}