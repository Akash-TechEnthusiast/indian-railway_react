
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetNewPassword from "./pages/login/ResetNewPassword";
import Register from "./pages/login/Register";
import ListView from "./pages/listview/ListView";
import Payment from "./pages/payment/Payment";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import CardView from "./pages/cardview/CardView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CreateForm from "./pages/createform/CreateForm";

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
            <Route index element={<Login />} />

            <Route path="/dashboard" element={<CreateForm />} />

            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/reset-password" exact element={<ForgotPassword />}></Route>
            <Route path="/reset-new-password" exact element={<ResetNewPassword />}></Route>

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />


    </div>
  );
}

export default App;
//      <Home />
