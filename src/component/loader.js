import React, { useState } from "react";

export default function Loader(props){ 
    return (
        <>
            {props.show && (
                <>
                    <div className='loader' >
                    <img src={require("./images/loader.gif")} />
                    <h2>
                        <div>Loading.....</div>
                        <div className="spinner-grow text-primary" role="status"></div>
                        <div className="spinner-grow text-secondary" role="status"></div>
                        <div className="spinner-grow text-success" role="status"></div>
                        <div className="spinner-grow text-danger" role="status"></div>
                        <div className="spinner-grow text-warning" role="status"></div>
                        <div className="spinner-grow text-info" role="status"></div>
                        <div className="spinner-grow text-light" role="status"></div>
                    </h2>
                    </div>
                </>
             )} 
        </>
    );
}

//to ue
// Alert start
//
// const [showAlert, setshowAlert] = useState(false);
// const [textAlert, settextAlert] = useState("");
// const [warnAlert, setwarnAlert] = useState();
//
//<Alert show={showAlert} setShow={setshowAlert} text={textAlert} warn={warnAlert} />

//1 -> wrong
//2->warning
//3->ok
//
// Alert end
