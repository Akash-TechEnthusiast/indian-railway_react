import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

const CardComponent = ({ title, description, image, onSelect, isSelected, quantity, onIncrement, onDecrement }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                boxShadow: 3,
                borderRadius: 2,
                border: isSelected ? "3px solid blue" : "1px solid gray",
                cursor: "pointer",
                p: 2,
            }}
        >
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>

                {/* Selection Button */}
                <Button
                    variant={isSelected ? "contained" : "outlined"}
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={onSelect}
                >
                    {isSelected ? "Remove from Cart" : "Add to Cart"}
                </Button>

                {/* Quantity Controls (Visible Only If Selected) */}
                {isSelected && (
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
                        <Button variant="outlined" onClick={onDecrement} disabled={quantity <= 1}>-</Button>
                        <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                        <Button variant="outlined" onClick={onIncrement}>+</Button>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default CardComponent;
