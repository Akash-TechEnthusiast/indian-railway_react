
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import "./styles/dark.scss"

import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [token, setToken] = useState();

  const [dark, setDark] = useState(false);


  if (!token) {
    return <Login setToken={setToken} />
  }

  return (


    <div className={dark ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />

            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
//      <Home />
