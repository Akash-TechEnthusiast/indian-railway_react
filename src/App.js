
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListView from "./pages/listview/ListView";
import Payment from "./pages/payment/Payment";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

import "./styles/dark.scss"

import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [token, setToken] = useState();

  const [dark, setDark] = useState(false);


  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  return (


    <div className={dark ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />


            <Route path="user">

              <Route index element={<ListView />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
              <Route path="payment" element={<Payment />} />





            </Route>

            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
//      <Home />
