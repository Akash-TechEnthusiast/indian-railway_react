import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axiosInstance from "../../components/service_urls/AxiosInstance";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Typography,
    Paper,
    CircularProgress,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Button
} from "@mui/material";

const ViewForm = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axiosInstance.get("/api/student/fetch_all_students");
                setStudents(response.data);
            } catch (err) {
                setError("Failed to fetch student data.");
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error" align="center">{error}</Typography>;
    }

    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <Box p={3} >
                    <Typography variant="h4" align="center" gutterBottom>
                        Student List
                    </Typography>

                    <TableContainer component={Paper} sx={{
                        maxHeight: 400,   // <- This is required for sticky header to work
                        border: "1px solid #ccc",
                        borderRadius: 1,
                    }} >
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>DOB</TableCell>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Agreed Terms</TableCell>
                                    <TableCell>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{student.name}</TableCell>
                                        <TableCell>{student.email}</TableCell>
                                        <TableCell>{student.gender}</TableCell>
                                        <TableCell>{student.age}</TableCell>
                                        <TableCell>{student.dob}</TableCell>
                                        <TableCell>{student.country}</TableCell>
                                        <TableCell>{student.address}</TableCell>
                                        <TableCell>{student.agreeTerms ? "Yes" : "No"}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => navigate(`/view/${student.id}`)}>View</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </div>
    );
};

export default ViewForm;
