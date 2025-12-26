import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

import React from "react";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return ( 
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
