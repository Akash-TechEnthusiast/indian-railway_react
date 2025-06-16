import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axiosInstance from "../../components/service_urls/AxiosInstance";
import { useNavigate, useLocation } from "react-router-dom";
import "./viewform.scss";

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
    const location = useLocation();
    const navigate = useNavigate();

    const [highlightedId, setHighlightedId] = useState(location.state?.highlightId || null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axiosInstance.get("/api/student/fetch_all_students");
                let fetchedStudents = response.data;

                // Move the highlighted student to the top
                const highlightId = location.state?.highlightId;
                if (highlightId) {
                    const highlightedStudent = fetchedStudents.find(s => s.id === highlightId);
                    if (highlightedStudent) {
                        fetchedStudents = [
                            highlightedStudent,
                            ...fetchedStudents.filter(s => s.id !== highlightId)
                        ];
                    }
                }

                setStudents(fetchedStudents);
            } catch (err) {
                setError("Failed to fetch student data.");
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, [location.state]);

    // Remove highlight after 5 seconds
    useEffect(() => {
        if (highlightedId) {
            const timer = setTimeout(() => setHighlightedId(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [highlightedId]);

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
                <Box p={3}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Student List
                    </Typography>

                    <TableContainer component={Paper} sx={{
                        maxHeight: 400,
                        border: "1px solid #ccc",
                        borderRadius: 1,
                    }}>
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
                                    <TableCell>Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow
                                        key={index}
                                        sx={
                                            student.id === highlightedId
                                                ? {
                                                    backgroundColor: "#d1ffd6",
                                                    transition: "background-color 1s ease",
                                                }
                                                : {}
                                        }
                                    >
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
                                        <TableCell>
                                            <Button onClick={() => navigate(`/edit/${student.id}`)}>Edit</Button>
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
