import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const CardComponent = ({ title, description, image }) => {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                </Button>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
