import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainaa from './component/asignup/academics/main';
import Mainb from "./component/bsignup/main"
import FooterAll from './footerAll';


const App = () => {
  return (
    <>
      <Routes>
      <Route path="/*" element={<Mainb />} />
      <Route path="/academics/*" element={<Mainaa/>}/>
      </Routes>
      <FooterAll/>
    </>
  );
};

export default App;
