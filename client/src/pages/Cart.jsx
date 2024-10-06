import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate(); // ใช้ useNavigate เพื่อการนำทาง
    const { items = [], grandTotal = 0 } = location.state || {};

    if (items.length === 0) {
        return <div>Your cart is empty.</div>;
    }

    const handleReceiptProduct = () => {
        // นำทางไปยังหน้าชำระเงิน (เช่น "/checkout")
        navigate('/Receiptproduct', { state: { items, grandTotal } });
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {items.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: ${item.total.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                <button onClick={handleReceiptProduct} className="checkout-button">
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default Cart;
