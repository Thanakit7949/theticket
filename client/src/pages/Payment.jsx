import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const handlePayment = async () => {
    try {
      await axios.post('http://localhost:3001/payments', { method: paymentMethod }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Payment successful!');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="credit_card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bank_transfer">Bank Transfer</option>
      </select>
      <button onClick={handlePayment} className="btn">Pay Now</button>
    </div>
  );
};

export default Payment;
