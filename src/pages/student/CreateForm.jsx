import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./createform.scss";
import axiosInstance from "../../components/service_urls/AxiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
    Grid,
    IconButton,
    InputAdornment,
    Box,
    Tabs,
    Tab,
    Chip,
    Rating,
    Autocomplete,
} from "@mui/material";
import {
    Email,
    Visibility,
    VisibilityOff,
    DateRange,
    FileUpload,
    Send,
    Delete
} from "@mui/icons-material";

const CreateForm = () => {
    const [tabValue, setTabValue] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        agreeTerms: false,
        notifications: true,
        age: 18,
        dob: "",
        country: "",
        address: ""
    });

    const [errors, setErrors] = useState({});
    const skills = ["React", "Java", "Spring Boot", "Python"];

    const handleTabChange = (_, newValue) => setTabValue(newValue);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleRemoveFile = () => setFile(null);

    const handleSliderChange = (_, newValue) => {
        setFormData({ ...formData, age: newValue });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
        if (!formData.password || formData.password.length < 6) errors.password = "Password must be at least 6 characters";
        if (!formData.gender) errors.gender = "Gender is required";
        if (!formData.dob) errors.dob = "Date of birth is required";
        if (!formData.country) errors.country = "Country is required";
        if (!formData.agreeTerms) errors.agreeTerms = "You must accept terms";
        if (!formData.address.trim()) errors.address = "Address is required";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            const fieldTabMap = {
                name: 0, email: 0, password: 0, gender: 0,
                age: 1, dob: 1, file: 1,
                country: 2, address: 2, agreeTerms: 2
            };
            setTabValue(fieldTabMap[Object.keys(validationErrors)[0]]);
            return toast.error("Please fix the errors in the form.");
        }

        try {
            console.log(formData);
            const response = await axiosInstance.post("/api/student/create", formData);
            toast.success("Form submitted successfully!");
            // navigate("/view");
            navigate("/view", { state: { highlightId: response.data.id, type: "new" } });
        } catch (error) {
            toast.error("Error submitting form.");
        }
    };

    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <Box sx={{ border: "3px solid #1976d2", borderRadius: "10px", p: 3, boxShadow: 2 }}>
                    <Typography variant="h4" align="center" mb={3}>Student Create Form</Typography>
                    <Tabs value={tabValue} onChange={handleTabChange} centered>
                        <Tab label="Basic Info" />
                        <Tab label="Details" />
                        <Tab label="Address" />
                    </Tabs>

                    <form onSubmit={handleSubmit}>
                        {tabValue === 0 && (
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} md={3}>
                                    <TextField label="Fisr Name" name="name" fullWidth size="small" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField label="Middle Name" name="name" fullWidth size="small" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField label="Last Name" name="name" fullWidth size="small" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField label="Aadhar No" name="name" fullWidth size="small" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField label="Pan No" name="name" fullWidth size="small" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                                </Grid>
                                {/* URL Field */}
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="url"
                                        label="Website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                {/* Time Field */}
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        type="time"
                                        size="small"
                                        label="Time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>


                                {/* DateTime Field */}
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        type="datetime-local"
                                        size="small"
                                        label="Date Time"
                                        name="datetime"
                                        value={formData.datetime}
                                        onChange={handleChange}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>


                                <Grid item xs={12} md={3}>
                                    <TextField label="Email" name="email" type="email" fullWidth size="small" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} InputProps={{ startAdornment: (<InputAdornment position="start"><Email /></InputAdornment>) }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField label="Password" name="password" type={showPassword ? "text" : "password"} fullWidth size="small" value={formData.password} onChange={handleChange} error={!!errors.password} helperText={errors.password} InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>) }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth error={!!errors.gender}>
                                        <Typography>Gender</Typography>
                                        <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                                            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                            <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                                        </RadioGroup>
                                        {errors.gender && <Typography color="error" variant="caption">{errors.gender}</Typography>}
                                    </FormControl>
                                </Grid>

                                {/* Color Picker */}
                                <Grid item xs={12} md={3}>
                                    <Typography>Select Color</Typography>
                                    <input
                                        type="color"
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                {/* Autocomplete */}
                                <Grid item xs={12} md={3}>
                                    <Autocomplete
                                        options={skills}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setFormData({ ...formData, skill: newValue });
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Skills" />
                                        )}
                                    />
                                </Grid>
                                {/* Rating */}
                                <Grid item xs={12}>
                                    <Typography>Rating</Typography>
                                    <Rating
                                        value={formData.rating}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setFormData({ ...formData, rating: newValue });
                                        }}
                                    />
                                </Grid>

                            </Grid>
                        )}

                        {tabValue === 1 && (
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} md={4}>
                                    <Typography>Age: {formData.age}</Typography>
                                    <Slider min={10} max={100} value={formData.age} onChange={handleSliderChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField label="Date of Birth" name="dob" type="date" fullWidth size="small" value={formData.dob} onChange={handleChange} error={!!errors.dob} helperText={errors.dob} InputLabelProps={{ shrink: true }} InputProps={{ startAdornment: (<InputAdornment position="start"><DateRange /></InputAdornment>) }} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button variant="contained" size="small" component="label" startIcon={<FileUpload />}>
                                        Upload File
                                        <input type="file" hidden onChange={handleFileChange} />
                                    </Button>
                                    {file && (
                                        <Box mt={1} display="flex" alignItems="center">
                                            <Typography variant="body2" mr={1}>{file.name}</Typography>
                                            <IconButton size="small" onClick={handleRemoveFile}><Delete color="error" /></IconButton>
                                        </Box>
                                    )}
                                </Grid>
                            </Grid>
                        )}

                        {tabValue === 2 && (
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth error={!!errors.country}>
                                        <InputLabel>Country</InputLabel>
                                        <Select name="country" value={formData.country} onChange={handleChange} label="Country">
                                            <MenuItem value="India">India</MenuItem>
                                            <MenuItem value="USA">USA</MenuItem>
                                            <MenuItem value="UK">UK</MenuItem>
                                        </Select>
                                        {errors.country && <Typography color="error" variant="caption">{errors.country}</Typography>}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="Address" name="address" fullWidth size="small" multiline rows={4} value={formData.address} onChange={handleChange} error={!!errors.address} helperText={errors.address} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch name="notifications" checked={formData.notifications} onChange={handleChange} />} label="Receive Notifications" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />} label="I agree to the terms and conditions" />
                                    {errors.agreeTerms && <Typography color="error" variant="caption">{errors.agreeTerms}</Typography>}
                                </Grid>
                            </Grid>
                        )}

                        <Grid item xs={12} mt={3} display="flex" justifyContent="center">
                            <Button type="submit" variant="contained" color="primary" startIcon={<Send />}>Submit</Button>
                        </Grid>
                    </form>
                </Box>
            </div>
        </div>
    );
};

export default CreateForm;
