import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReceiptProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { items = [], grandTotal = 0 } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [paypalEmail, setPaypalEmail] = useState('');
    const [bankName, setBankName] = useState('');
    const [bankAccount, setBankAccount] = useState('');

    const handlePayment = () => {
        // Validate inputs
        if (paymentMethod === 'Credit Card' && !creditCardNumber) {
            alert('Please enter your credit card number.');
            return;
        }
        if (paymentMethod === 'PayPal' && !paypalEmail) {
            alert('Please enter your PayPal email.');
            return;
        }
        if (paymentMethod === 'Bank Transfer' && (!bankName || !bankAccount)) {
            alert('Please select a bank and enter your bank account number.');
            return;
        }

        // Handle payment submission here
        alert(`Payment of $${grandTotal.toFixed(2)} via ${paymentMethod} was successful!`);
        navigate('/confirmation', { state: { items, grandTotal, paymentMethod } });
    };

    return (
        <div className="receipt-container">
            <h1>Order Summary</h1>
            <div className="receipt-items">
                {items.map((item) => (
                    <div key={item.id} className="receipt-item">
                        <img src={item.imageUrl} alt={item.name} className="receipt-item-image" />
                        <div className="receipt-item-details">
                            <h3>{item.name}</h3>
                            <p2>Price: {item.price}</p2> <br />
                            <p2>Quantity: {item.quantity}</p2> <br />
                            <p2>Total: ${item.total.toFixed(2)}</p2> <br />
                        </div>
                    </div>
                ))}
            </div>
            <div className="payment-method-section">
                <h3>Select Payment Method:</h3>
                <div className="payment-method-options">
                    <label>
                        <input
                            type="radio"
                            value="Credit Card"
                            checked={paymentMethod === 'Credit Card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Credit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="PayPal"
                            checked={paymentMethod === 'PayPal'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        PayPal
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Bank Transfer"
                            checked={paymentMethod === 'Bank Transfer'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Bank Transfer
                    </label>
                </div>
            </div>

            {/* Conditional form fields based on payment method */}
            <div className="payment-details">
                {paymentMethod === 'Credit Card' && (
                    <div className="payment-input">
                        <label>Credit Card Number:</label>
                        <input
                            type="text"
                            placeholder="Enter credit card number"
                            value={creditCardNumber}
                            onChange={(e) => setCreditCardNumber(e.target.value)}
                        />
                    </div>
                )}
                {paymentMethod === 'PayPal' && (
                    <div className="payment-input">
                        <label>PayPal Email:</label>
                        <input
                            type="email"
                            placeholder="Enter PayPal email"
                            value={paypalEmail}
                            onChange={(e) => setPaypalEmail(e.target.value)}
                        />
                    </div>
                )}
                {paymentMethod === 'Bank Transfer' && (
                    <div className="payment-input">
                        <label>Select Bank:</label>
                        <select value={bankName} onChange={(e) => setBankName(e.target.value)}>
                            <option value="">-- Select Bank --</option>
                            <option value="BBL">BBL ธนาคารกรุงเทพ</option>
                            <option value="KBANK">KBANK ธนาคารกสิกรไทย</option>
                            <option value="KTB">KTB ธนาคารกรุงไทย</option>
                            <option value="TTB">TTB ธนาคารทหารไทยธนชาต</option>
                            <option value="SCB">SCB ธนาคารไทยพาณิชย์</option>
                            <option value="CIMBT">CIMBT ธนาคารซีไอเอ็มบีไทย</option>
                            <option value="UOBT">UOBT ธนาคารยูโอบี</option>
                            <option value="BAY">BAY ธนาคารกรุงศรีอยุธยา</option>
                            <option value="GSB">GSB ธนาคารออมสิน</option>
                            
                            {/* Add more banks as needed */}
                        </select>
                        <label>Bank Account Number:</label>
                        <input
                            type="text"
                            placeholder="Enter bank account number"
                            value={bankAccount}
                            onChange={(e) => setBankAccount(e.target.value)}
                        />
                    </div>
                )}
            </div>

            <div className="receipt-summary">
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                <button onClick={handlePayment} className="confirm-payment-button">
                    Confirm Payment
                </button>
            </div>
        </div>
    );
};

export default ReceiptProduct;
