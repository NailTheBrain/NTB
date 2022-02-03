import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainaa from './component/asignup/academics/main';
import Mainb from "./component/bsignup/main"


const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Mainb />} />
      <Route path="/academics/*" element={<Mainaa/>}/>
    </Routes>
  );
};

export default App;
