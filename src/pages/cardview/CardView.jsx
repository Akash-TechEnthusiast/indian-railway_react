import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./cardview.scss";
import { Grid, Container, Button } from "@mui/material";
import CardComponent from "../../components/card/CardComponent";
import React, { useState } from "react";
import axios from "axios";

const CardView = () => {

    const cardData = [
        { id: 1, title: "React.js", description: "A JavaScript librar.", image: "https://fastly.picsum.photos/id/882/536/354.jpg?hmac=LrekxoqI1NUSQ0lz5-itEd5TFAkHbFm6Qm0aRoZykts" },
        { id: 2, title: "Node.js", description: "A runtime for Java.", image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" },
        { id: 3, title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { id: 4, title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { id: 5, title: "React.js", description: "A JavaScript library .", image: "https://fastly.picsum.photos/id/882/536/354.jpg?hmac=LrekxoqI1NUSQ0lz5-itEd5TFAkHbFm6Qm0aRoZykts" },
        { id: 6, title: "Node.js", description: "A runtime for .", image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" }
    ]

    const [selectedCards, setSelectedCards] = useState([]);

    // Handle individual card selection/deselection
    const handleSelect = (id) => {
        setSelectedCards((prevSelected) =>
            prevSelected.includes(id) ? prevSelected.filter((cardId) => cardId !== id) : [...prevSelected, id]
        );
    };

    // Send selected cards to backend
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/cards", { selectedCards });
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
                    <Grid container spacing={3} justifyContent="center">
                        {cardData.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <CardComponent
                                    {...card}
                                    isSelected={selectedCards.includes(card.id)} // ✅ Check selection for each card
                                    onSelect={() => handleSelect(card.id)} // ✅ Handle individual selection
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 3 }}
                        disabled={selectedCards.length === 0} // ✅ Disable if no cards are selected
                    >
                        Submit Selected Cards
                    </Button>
                </Container>

            </div>
        </div>
    );
};

export default CardView;
