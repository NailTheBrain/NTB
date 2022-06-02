import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Main from './admin/main'
import Mainaa from './component/asignup/academics/main';
import Mainb from "./component/bsignup/main"
// import Contact from './contact';
// import ContactCall from './contactCall';
import FooterAll from './footerAll';

const App =  () => {
  
  return (
    <>
    {/* <ContactCall/> */}
      <Routes>
      <Route path="/*" element={<Mainb />} />
      <Route path="/academics/*" element={<Mainaa/>}/>
      {/* <Route path="/operator/*" element={<Main/>}/> */}
      {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      <FooterAll/>
    </>
  );
};

export default App;
