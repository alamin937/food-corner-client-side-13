import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const {paymentId} = useParams()
    const [orders, setOrders] = useState([])
    useEffect(() =>{
        fetch(`https://evening-ridge-81485.herokuapp.com/placeorder/${paymentId}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[paymentId])
    return (
        <div>
            <h1>Payment: {paymentId}</h1>
            <h1>{orders.userName}</h1>
    </div>
    );
};

export default Payment;