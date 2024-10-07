import React from "react";
import "./styless.css";
import Pro1Image from "../assets/pro1.webp";  // replace with actual image paths
import Pro2Image from "../assets/pro2.webp";
import Pro3Image from "../assets/pro3.webp";
import Pro4Image from "../assets/pro4.png";

const promotionsData = [
  {
    image: Pro1Image,
    brand: "GARNIER",
    title: "สยบปัญหาสิว ผิวดูสะอาดใส",
    offer: "ซื้อ 1 แถม 1",
    dates: "1 ต.ค. 67 - 31 ต.ค. 67",
  },
  {
    image: Pro2Image,
    brand: "LEADERS",
    title: "ลดสูงสุด 79%",
    offer: "ฟุตพีลลิ่งมาส์ก ฟรี",
    dates: "7 ต.ค. 67 - 13 ต.ค. 67",
  },
  {
    image: Pro3Image,
    brand: "ACNE AID",
    title: "Foaming Face Wash",
    offer: "ฟรี Photocard",
    dates: "27 ก.ย. 67 - 20 ต.ค. 67",
  },
  {
    image: Pro4Image,
    brand: "JUDYDOLL",
    title: "Makeup Simplified",
    offer: "ฟรี เครื่องสำอาง",
    dates: "7 ต.ค. 67 - 13 ต.ค. 67",
  },
];

const PromotionCard = ({ promotion }) => (
  <div className="promotion-card">
    <img src={promotion.image} alt={promotion.title} className="promotion-image" />
    <h4 className="promotion-brand">{promotion.brand}</h4>
    <h3 className="promotion-title">{promotion.title}</h3>
    <p className="promotion-offer">{promotion.offer}</p>
    <p className="promotion-dates">{promotion.dates}</p>
  </div>
);

const PromotionGrid = () => {
  return (
    <div className="promotion-grid">
      {promotionsData.map((promotion, index) => (
        <PromotionCard key={index} promotion={promotion} />
      ))}
    </div>
  );
};

export default PromotionGrid;
