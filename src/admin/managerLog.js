import React from 'react'
import Heading from "../component/heading"

const ManagerLog = () => {
  return (
      <div className="center area1 op-data" data-aos="zoom-out">
        <div className="op-heading">
              <Heading text="manager" size="12" />
          </div>
          <div>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button  className="button">Submit</button>
          </div>
    </div>
  )
}

export default ManagerLog