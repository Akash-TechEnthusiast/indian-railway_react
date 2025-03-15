import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./createform.scss";
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
import { Email, Visibility, VisibilityOff, DateRange, FileUpload, Send } from "@mui/icons-material";

const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
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

    // Handle file selection
    const handleFileChange = (event) => {
        setFormData({ ...formData, file: event.target.files[0] });
    };

    // Handle slider change
    const handleSliderChange = (event, newValue) => {
        setFormData({ ...formData, age: newValue });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (


        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <Box
                    sx={{
                        border: "2px solid #1976d2", // Border color
                        borderRadius: "10px", // Rounded corners
                        padding: "20px",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
                        Material-UI Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {/* Name Field */}
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            </Grid>

                            {/* Email Field with Icon */}
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
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
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
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
                            <Grid item xs={12} md={4}>
                                <FormControl component="fieldset">
                                    <Typography>Gender</Typography>
                                    <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            {/* Age Slider */}
                            <Grid item xs={12} md={4}>
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
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    name="dob"
                                    type="date"
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
                            <Grid item xs={12} md={4}>
                                <Button variant="contained" component="label" startIcon={<FileUpload />}>
                                    Upload File
                                    <input type="file" hidden onChange={handleFileChange} />
                                </Button>
                            </Grid>

                            {/* Dropdown Select */}
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Country</InputLabel>
                                    <Select name="country" value={formData.country} onChange={handleChange}>
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="USA">USA</MenuItem>
                                        <MenuItem value="UK">UK</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Checkbox */}
                            <Grid item xs={12} md={4}>
                                <FormControlLabel
                                    control={<Checkbox checked={formData.agreeTerms} onChange={handleChange} name="agreeTerms" />}
                                    label="I agree to the terms and conditions"
                                />
                            </Grid>

                            {/* Switch */}
                            <Grid item xs={12} md={4}>
                                <FormControlLabel
                                    control={<Switch checked={formData.notifications} onChange={handleChange} name="notifications" />}
                                    label="Receive Notifications"
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12} md={4}>
                                <Button type="submit" variant="contained" color="primary" fullWidth startIcon={<Send />}>
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

export default CreateForm;
