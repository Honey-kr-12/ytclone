import { loadStripe } from '@stripe/stripe-js';

// const Premium = () => {
  // const handleSubscribe = async () => {
  //   // Load Stripe.js and initialize a Stripe instance
  //   const stripe = await loadStripe('pk_test_51OxQe8SCUzgxBymGhiuT059gA4Wzix3SMvkqbtmsz14NA9tU0P5qttCi8mHjJiIVcRHLMRzHRgEtkD95KMhD8oSf00yuni6Ezu');

  //   // Create a checkout session
  //   const response = await fetch('http://localhost:5000/premium/api/subscriptions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ priceId: 'price_1P4o1LSCUzgxBymGvdo6AIoz' }),
  //   });

  //   console.log(response);

  //   const session = await response.json();

  //   // Redirect to Checkout
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     console.error('Error redirecting to Checkout:', result.error.message);
  //   }
  // };

  // return (
  //   <div>
  //     <h2>Basic Subscription</h2>
  //     <button onClick={handleSubscribe}>Subscribe for ₹5/month</button>
  //   </div>
  // );
// };

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';

const Premium = () => {
  const CurrentUser = useSelector(state => state.currentUserReducer)
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // Load Stripe.js and initialize a Stripe instance
      const stripe = await loadStripe('pk_test_51OxQe8SCUzgxBymGhiuT059gA4Wzix3SMvkqbtmsz14NA9tU0P5qttCi8mHjJiIVcRHLMRzHRgEtkD95KMhD8oSf00yuni6Ezu');

      const response = await fetch('http://localhost:5000/premium/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_1P4o1LSCUzgxBymGvdo6AIoz', // Replace with your actual price ID
          customerName, 
          customerAddress,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe checkout page
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (result.error) {
        console.error('Error redirecting to Checkout:', result.error.message);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
      </div>
      {/* <button onClick={handleCheckout} disabled={loading}> */}
      {/* <Link to={`/success/${CurrentUser?.result._id}`} > */}
        <button disabled={loading} onClick={handleCheckout} >
        {loading ? 'Processing...' : 'Checkout'}
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Premium;
