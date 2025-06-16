import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axiosInstance from "../../components/service_urls/AxiosInstance";
import { useNavigate, useLocation } from "react-router-dom";
import "./viewform.scss";
import { Chip } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

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
    Button,
    TextField
} from "@mui/material";

const ViewForm = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [highlightedId, setHighlightedId] = useState(null);
    const [highlightType, setHighlightType] = useState(null); // "new" or "edit"

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axiosInstance.get("/api/student/fetch_all_students");
                let fetchedStudents = response.data;

                const highlightId = location.state?.highlightId;
                if (highlightId) {
                    setHighlightedId(highlightId);
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

    useEffect(() => {
        if (highlightedId) {
            const timer = setTimeout(() => setHighlightedId(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [highlightedId]);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
        //||
        // student.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h4">Student List</Typography>
                        <TextField
                            label="Search"
                            variant="outlined"
                            size="small"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            sx={{ width: 300 }}
                        />
                    </Box>

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
                                {filteredStudents.map((student, index) => (
                                    <TableRow
                                        key={student.id}
                                        sx={
                                            student.id === highlightedId
                                                ? {
                                                    backgroundColor: "#d1ffd6",
                                                    transition: "background-color 0.5s ease",
                                                }
                                                : {}
                                        }
                                    >







                                        <TableCell>
                                            {student.name}
                                            {student.id === highlightedId && highlightType === "new" && (
                                                <Chip
                                                    label="New"
                                                    size="small"
                                                    color="success"
                                                    sx={{ ml: 1 }}
                                                />
                                            )}
                                            {student.id === highlightedId && highlightType === "edit" && (
                                                <Chip
                                                    label="Edited"
                                                    size="small"
                                                    color="info"
                                                    sx={{ ml: 1 }}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>{student.email}</TableCell>
                                        <TableCell>{student.gender}</TableCell>
                                        <TableCell>{student.age}</TableCell>
                                        <TableCell>{student.dob}</TableCell>
                                        <TableCell>{student.country}</TableCell>
                                        <TableCell>{student.address}</TableCell>
                                        <TableCell>{student.agreeTerms ? "Yes" : "No"}</TableCell>
                                        <TableCell>
                                            <Button
                                                // variant="outlined"
                                                size="small"
                                                startIcon={<VisibilityIcon />}
                                                onClick={() => navigate(`/view/${student.id}`)}
                                            >

                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                //  variant="outlined"
                                                color="primary"
                                                size="small"
                                                startIcon={<EditIcon />}
                                                onClick={() => navigate(`/edit/${student.id}`)}
                                            >

                                            </Button>
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
