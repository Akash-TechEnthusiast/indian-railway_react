import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios';

const Payment = () => {
  
  
    const paymentHandler = async (e) => {
        const API_URL = 'http://localhost:5000/'
        e.preventDefault();
        const orderUrl = `${API_URL}order`;
        const response = await axios.get(orderUrl);
        const { data } = response;
        const options = {
          key: process.env.RAZOR_PAY_KEY_ID,
          name: "Indian Raiways",
          description: "Vande Bharat ",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `${API_URL}capture/${paymentId}`;
             const captureResponse = await axios.post(url, {})
             console.log(captureResponse.data);
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        };
        
  
  
return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <button onClick={paymentHandler}>Pay Now</button>
      </div>

      </div>

  )
}

export default Payment
