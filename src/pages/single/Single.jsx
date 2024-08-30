import React, { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Charts from "../../components/charts/Charts";
import List from "../../components/list/List";
import "./single.scss";
const Single = () => {


    return (
        <div className="single">
            <Sidebar />
            <div className="singlecontainer">
                <Navbar />

                <div className="top">
               
                <div className="left">

                <div className="editbutton">Edit</div>
                <h1 className="title">Information</h1>

                <div className="item" >

                <img className="cellImage" src="https://www.tvinsider.com/wp-content/uploads/2017/05/GettyImages-648935262-1014x570.jpg" alt=""/>
                

                    <div className="details">

                        <h1 className="itemTitle">Akash Gandham</h1>
                        <div className="detailedItem">
                         <span className="itemKey">Name :</span>
                         <span className="itemValue">Gandham Akash</span>
                       
                        </div>
                        <div className="detailedItem"> 
                         <span className="itemKey">Phone :</span>
                         <span className="itemValue">+91 7075459707</span>
                        </div>
                        <div className="detailedItem">
                         <span className="itemKey">Email :</span>
                         <span className="itemValue">akash922.g@gmail.com</span>
                        </div>
                        <div className="detailedItem">
                         <span className="itemKey">Address :</span>
                         <span className="itemValue">HNO 2-78-789 VALLB NAGAR WANAPATYHY</span>
                        </div>
                    </div>


                </div>
                 

                




                </div>
                
              
                
                <div className="right">
                <Charts aspect={ 4 / 1 } title="User Spending (Last 6 Months)"/>
                </div>
                </div>
              
                <div className="bottom">
                <h1 className="title">Information</h1>
                <List />
                </div>


            </div>
        </div>
    )
}

export default Single
