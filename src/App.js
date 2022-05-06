import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainaa from './component/asignup/academics/main';
import Mainb from "./component/bsignup/main"
import Contact from './contact';
import ContactCall from './contactCall';
import FooterAll from './footerAll';


const App = () => {
  return (
    <>
    {/* <ContactCall/> */}
      <Routes>
      <Route path="/*" element={<Mainb />} />
      <Route path="/academics/*" element={<Mainaa/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      <FooterAll/>
    </>
  );
};

export default App;
