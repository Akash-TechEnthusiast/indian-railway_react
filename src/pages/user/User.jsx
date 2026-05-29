import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./createform.scss";
import axiosInstance from "../../components/service_urls/AxiosInstance";
import { toast } from "react-toastify";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Switch,
    Slider,
    Typography,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Box
} from "@mui/material";
import { Email, Visibility, VisibilityOff, DateRange, FileUpload, Send, Delete } from "@mui/icons-material";

const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        cname: "",
        dname: "",
        ename: "",
        fname: "",
        gname: "",
        email: "",
        password: "",
        gender: "",
        agreeTerms: false,
        notifications: true,
        age: 18,
        dob: "",
        file: null,
    });

    const [showPassword, setShowPassword] = useState(false);


    // Handle input change
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };



    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
    };



    // Handle slider change
    const handleSliderChange = (event, newValue) => {
        setFormData({ ...formData, age: newValue });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            gender: formData.gender,
            age: formData.age,
            dob: formData.dob,
            agreeTerms: formData.agreeTerms,
            notifications: formData.notifications,
            country: formData.country,
        };

        try {
            const response = await axiosInstance.post("/api/student/create", formDataToSend, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Data submitted successfully:", response.data);
            // alert("Form submitted successfully!");
            toast.success(" Data submitted successfully: ", {
                position: "top-right",
                autoClose: 3000, // Closes after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });


        } catch (error) {
            console.error("Error submitting form:", error);

            // alert("Failed to submit form.");

            toast.error(" Error while submitting form ", {
                position: "top-right",
                autoClose: 3000, // Closes after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

        }
    };
    return (


        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <Box
                    sx={{

                        border: "3px solid #1976d2", // Border color
                        borderRadius: "10px", // Rounded corners
                        padding: "20px",

                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow

                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
                        Student Create Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {/* Name Field */}
                            <Grid item xs={12} md={2} sm={6}>
                                <TextField label="Name" size="small" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={2}>
                                <TextField label="Namekk" size="small" name="cname" value={formData.cname} onChange={handleChange} required />
                            </Grid>


                            {/* Email Field with Icon */}
                            <Grid item xs={12} md={2}>
                                <TextField

                                    label="Email"
                                    name="email"
                                    type="email"
                                    size="small"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>


                            {/* Password Field with Toggle */}
                            <Grid item xs={12} md={2}>
                                <TextField

                                    label="Password"
                                    name="password"
                                    size="small"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            {/* Gender Radio Buttons */}


                            {/* Age Slider */}
                            <Grid item xs={12} md={2} fullWidth={false}>
                                <Typography>Age: {formData.age}</Typography>
                                <Slider
                                    value={formData.age}
                                    onChange={handleSliderChange}
                                    min={10}
                                    max={100}
                                    step={1}
                                    marks
                                />
                            </Grid>

                            {/* Date of Birth Field */}
                            <Grid item xs={12} md={2}>
                                <TextField

                                    name="dob"
                                    type="date"
                                    size="small"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                    label="Date of Birth"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <DateRange />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            {/* File Upload */}



                            <Grid item xs={12} md={2}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    component="label"
                                    startIcon={<FileUpload />}
                                >
                                    Upload File
                                    <input type="file" hidden onChange={handleFileChange} />
                                </Button>

                                {/* Show Uploaded File Name and Remove Button */}
                                {file && (
                                    <Grid container alignItems="center" sx={{ mt: 1 }}>
                                        <Typography variant="body2" sx={{ color: "gray", mr: 1 }}>
                                            {file.name}
                                        </Typography>
                                        <IconButton size="small" onClick={handleRemoveFile}>
                                            <Delete color="error" />
                                        </IconButton>
                                    </Grid>
                                )}
                            </Grid>


                            {/* Dropdown Select */}
                            <Grid item xs={12} md={2}>


                                <FormControl fullWidth>


                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select name="country" value={formData.country}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Country"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="USA">USA</MenuItem>
                                        <MenuItem value="UK">UK</MenuItem>
                                    </Select>
                                </FormControl>



                            </Grid>

                            <Grid item xs={12} md={2}>
                                <FormControl component="fieldset">
                                    <Typography>Gender</Typography>
                                    <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                                        <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                        <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            {/* Checkbox */}

                            {/* Switch */}


                            <Grid item xs={12} md={4}>
                                <TextField fullWidth
                                    id="outlined-multiline-static"
                                    label="Address"
                                    multiline
                                    rows={4}
                                    defaultValue="Enter Address"
                                />
                            </Grid>

                            <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                                <FormControlLabel
                                    control={<Switch size="small" checked={formData.notifications} onChange={handleChange} name="notifications" />}
                                    label="Receive Notifications"
                                />
                            </Grid>


                            <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <FormControlLabel
                                    control={<Checkbox size="small" checked={formData.agreeTerms} onChange={handleChange} name="agreeTerms" />}
                                    label="I agree to the terms and conditions"
                                />
                            </Grid>







                            {/* Submit Button */}


                            <Grid fullWidth item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <Button type="submit" size="small" variant="contained" color="primary" startIcon={<Send />}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                </Box>
            </div>
        </div>
    );
};

export default User;
