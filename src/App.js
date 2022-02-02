import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Maina from './component/asignup/main';
import Mainb from "./component/bsignup/main"


const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Mainb />} />
      <Route path="/home/*" element={<Maina/>}/>
    </Routes>
  );
};

export default App;
