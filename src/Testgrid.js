// ProductGrid.js

import React from 'react';
import Testproduct from './Testproduct';

const products = [
    {
        id: 1,
        image: 'src/Images/rounded 1.png',
        title: 'c',
        description: 'Russian Salad',
        rating: 4.5,
        time: '40 mins ago',
        favoriteCount: 10,
        commentCount: 5
    },
    {
        id: 2,
        image: 'src/Images/rounded 2.jpg',
        title: 'Daily Free',
        description: 'Russian Salad',
        rating: 4.5,
        time: '40 min ago',
        favoriteCount: 7,
        commentCount: 3
    },
    // Add more products as needed
];

const Testgrid = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {products.map(product => (
                <Testproduct key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Testgrid;
