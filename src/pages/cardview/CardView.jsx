import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./cardview.scss";
import { Grid, Container } from "@mui/material";
import CardComponent from "../../components/card/CardComponent";

const CardView = () => {

    const cardData = [
        { title: "React.js", description: "A JavaScript librar.", image: "https://fastly.picsum.photos/id/882/536/354.jpg?hmac=LrekxoqI1NUSQ0lz5-itEd5TFAkHbFm6Qm0aRoZykts" },
        { title: "Node.js", description: "A runtime for Java.", image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" },
        { title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { title: "React.js", description: "A JavaScript library .", image: "https://fastly.picsum.photos/id/882/536/354.jpg?hmac=LrekxoqI1NUSQ0lz5-itEd5TFAkHbFm6Qm0aRoZykts" },
        { title: "Node.js", description: "A runtime for .", image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" },
        { title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" },
        { title: "Spring Boot", description: "A framework for .", image: "https://media.istockphoto.com/id/1326050425/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5fVqgRROHNt8G3WlE5X_La9GHUuRQK2eXZU_gJ2UHnE=" }
    ];

    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />

                <Container sx={{ py: 5 }}>
                    <Grid container spacing={3} justifyContent="center">
                        {cardData.map((card, index) => (
                            <Grid item key={index} xs={6} sm={3} md={2}>
                                <CardComponent {...card} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </div>
        </div>
    );
};

export default CardView;
