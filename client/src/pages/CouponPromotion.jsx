import React from "react";
import Image from '../assets/pp.webp'; 
import { Link } from "react-router-dom"; // นำเข้า Link

const CouponPromotion = () => {
  return (
    <div className="condition-page">
    <img src={Image} alt="การใช้คูปอง" className="image" />
    <button className="buy-condition">
            <Link
              to="/promotions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              กลับสู่หน้าหลัก
            </Link>
          </button>
        </div>
        
        
  );
};

export default CouponPromotion;
