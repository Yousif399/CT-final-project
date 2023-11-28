import React from 'react'
import { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../comp/CheckoutForm';
import { DataContext } from '../../context/DataProvider';




const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const { cart } = useContext(DataContext)

    useEffect(() => {
        fetch('https://bike-flask.onrender.com/pay/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <>
        {clientSecret && (
            <Elements options={options} stripe={stripe}>
                <CheckoutForm/>
            </Elements>
        )}
    </>
        
    )
}

export default Checkout