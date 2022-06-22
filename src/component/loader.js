import React from "react";

export default function Loader(props) {

    return (
        <>
            {props.show && (
                <>
                    <div className='otp' style={{background:"black"}}>
                    <img src={require("./images/loader.gif")} width={"500rem"}/>
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
