import React from 'react';
import { useLoaderData } from 'react-router';

const Checkout = () => {
    const course = useLoaderData()
    return (
        <div>
            <h1>{co}</h1>
        </div>
    );
};

export default Checkout;