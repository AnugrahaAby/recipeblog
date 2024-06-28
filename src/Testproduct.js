// ProductCard.js

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';

const Testproduct = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleCommentClick = () => {
        // Handle comment click logic
        console.log('Comment clicked');
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating} | Time: {product.time}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <FavoriteIcon
                    color={isFavorite ? 'error' : 'action'}
                    onClick={toggleFavorite}
                />
                <Typography variant="body2" color="text.secondary">
                    {product.favoriteCount}
                </Typography>
                <ChatIcon onClick={handleCommentClick} />
                <Typography variant="body2" color="text.secondary">
                    {product.commentCount}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Testproduct;
