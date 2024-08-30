import React, { useState,useEffect } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios';
const New = () => {

    const [file, setFile] = useState(null);



    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);

      console.log('Selected file:', e.target.files[0]);
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      axios.post('http://localhost:3000/api/upload', formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
          }
      })
        .then((response) => {
          console.log('File uploaded successfully!', response);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    };
  
    const handleFileUpload = () => {
     
    };

    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={selectedFile ? URL.createObjectURL(selectedFile) : "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"} alt="childImage" ></img>


                    </div>
                    <div className="right">
                        <form autocomplete="off">
                            <div className="formInput">

                                <lable htmlFor="fileuploadId"></lable>
                                <input id="fileuploadId" onChange={handleFileChange} type="file" style={{ "border-bottom": "none" }}></input>

                            </div>
                          
                            <div className="formInput">
                                <lable>address</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>


                            <div className="formInput">
                                <lable>username</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>


                            <div className="formInput">
                                <lable>password</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>


                            <div className="formInput">
                                <lable>email</lable>
                                <input type="email" placeholder="Akash"></input>
                            </div>

                            
                            <div className="formInput">
                                <lable>phoneno</lable>
                                <input type="number" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>colony</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>ward</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>

                            <button>Save</button>
                        </form>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default New
