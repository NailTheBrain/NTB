import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Main from './admin/main'
import Mainaa from './component/asignup/academics/main';
import Maind from './component/asignup/development/Maind';
import Mainb from "./component/bsignup/main"
import Otp from './component/bsignup/Otp';
// import Contact from './contact';
// import ContactCall from './contactCall';
import FooterAll from './footerAll';

const App =  () => {

  
  
  return (
    <>
    {/* <ContactCall/> */}
      <Routes>
      <Route path="/*" element={<Otp />} />
      <Route path="/academics/*" element={<Mainaa/>}/>
      <Route path="/development/*" element={<Maind/>}/>
      {/* <Route path="/operator/*" element={<Main/>}/> */}
      {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      <FooterAll/>
    </>
  );
};

export default App;
