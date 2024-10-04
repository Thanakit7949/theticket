import React from "react";
import './styles.css'; // Ensure this CSS file is properly linked

const Products = () => {
    return (
        <div className="products-container-main">
            <h1 className="products-title-main">Products</h1>


            <p className="products-description">Here are some of our amazing products!</p>
            {/* You can add your product items here */}
        </div>
    );
};
export default Products;