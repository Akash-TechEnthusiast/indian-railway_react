import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardComponent = ({ title, description, image, onSelect, isSelected }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                boxShadow: 3,
                borderRadius: 2,
                border: isSelected ? "3px solid blue" : "1px solid gray", // ✅ Individual selection
                cursor: "pointer"
            }}
            onClick={onSelect} // ✅ Clicking toggles selection
        >
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
