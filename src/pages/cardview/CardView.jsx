import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./cardview.scss";
import CardComponent from "../../components/card/CardComponent";
import axiosInstance from "../../components/service_urls/AxiosInstance";
import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel, Container, Grid, Button } from "@mui/material";

const CardView = () => {

    const cardData = [
        { id: 1, title: "React.js", description: "A JavaScript librar.", image: "https://fastly.picsum.photos/id/882/536/354.jpg?hmac=LrekxoqI1NUSQ0lz5-itEd5TFAkHbFm6Qm0aRoZykts" },
        { id: 2, title: "Node.js", description: "A runtime for Java.", image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" },
        { id: 3, title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { id: 4, title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { id: 5, title: "React.js", description: "A JavaScript library .", image: "https://fastly.picsum.photos/id/882/536/354.jpg?hmac=LrekxoqI1NUSQ0lz5-itEd5TFAkHbFm6Qm0aRoZykts" },
        { id: 6, title: "Node.js", description: "A runtime for .", image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" }
    ]

    const [customers, setCustomers] = useState([]); // Store customers
    const [selectedCards, setSelectedCards] = useState([]);
    const [customerId, setCustomerId] = useState(""); // Store customer ID input


    useEffect(() => {
        axiosInstance.get("/api/customers/fetch_all_customers")
            .then(response => setCustomers(response.data))
            .catch(error => console.error("Error fetching customers:", error));
    }, []);

    // Handle customer selection
    const handleCustomerChange = (event) => {
        setCustomerId(event.target.value);
    };


    // Handle card selection/deselection
    const handleSelect = (card) => {
        setSelectedCards((prevSelected) => {
            const exists = prevSelected.find((c) => c.id === card.id);
            return exists ? prevSelected.filter((c) => c.id !== card.id) : [...prevSelected, { ...card, quantity: 1 }];
        });
    };

    // Handle quantity change
    const handleQuantityChange = (id, change) => {
        setSelectedCards((prevSelected) =>
            prevSelected.map((card) =>
                card.id === id ? { ...card, quantity: Math.max(1, card.quantity + change) } : card
            )
        );
    };

    // Send selected card objects & customer ID to backend
    const handleSubmit = async () => {
        if (!customerId) {
            alert("Please enter a customer ID!");
            return;
        }

        try {
            const payload = { customerId, selectedCards };
            const response = await axiosInstance.post("/products/cards", payload);
            console.log("Response:", response.data);
            alert("Cards sent successfully!");
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />

                <Container sx={{ py: 5 }}>
                    {/* Input for Customer ID */}



                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Select Customer</InputLabel>
                        <Select value={customerId} onChange={handleCustomerChange}>
                            {customers.map((customer) => (
                                <MenuItem key={customer.id} value={customer.id}>
                                    {customer.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Display Cards */}
                    <Grid container spacing={3} justifyContent="center">
                        {cardData.map((card) => {
                            const selectedCard = selectedCards.find((c) => c.id === card.id);
                            return (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <CardComponent
                                        {...card}
                                        isSelected={!!selectedCard}
                                        quantity={selectedCard?.quantity || 1}
                                        onSelect={() => handleSelect(card)}
                                        onIncrement={() => handleQuantityChange(card.id, 1)}
                                        onDecrement={() => handleQuantityChange(card.id, -1)}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                    {/* Submit Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 3 }}
                        disabled={selectedCards.length === 0 || !customerId} // Disable if no cards selected or no customer ID
                    >
                        Submit Selected Cards
                    </Button>
                </Container>

            </div>
        </div>
    );
};

export default CardView;
