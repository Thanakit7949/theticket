import React, { useEffect, useState } from "react";
import "./styless.css";
import ProImage from "../assets/promotion.webp";
import Pro1Image from "../assets/pro1.webp";
import Pro2Image from "../assets/pro2.webp";
import Pro3Image from "../assets/pro9.png";
import Pro4Image from "../assets/pro4.png";
import Pro5Image from "../assets/pro5.png";
import Pro6Image from "../assets/pro6.png";
import Pro7Image from "../assets/pro7.png";
import Pro8Image from "../assets/pro8.png";
import cat from "../assets/cat.png";
import pro9Image from "../assets/proo.png";

const promotionsData = [
  {
    discount: "ลด 35%",
    image: Pro3Image,
    title: "POP MART THE MONSTERS",
    oldPrice: 2250,
    newPrice: 1200,
    dates: "19-25 ตุลาคม 67",
  },
  {
    discount: "ลด 20%",
    image: Pro4Image,
    title: "สินค้าพิเศษ",
    oldPrice: 700,
    newPrice: 560,
    dates: "20-25 ตุลาคม 67",
  },
  {
    discount: "ลด 25%",
    image: Pro5Image,
    title: "ของเล่นใหม่",
    oldPrice: 500,
    newPrice: 375,
    dates: "21-26 ตุลาคม 67",
  },
  {
    discount: "ลด 15%",
    image: Pro6Image,
    title: "สินค้าใหม่",
    oldPrice: 600,
    newPrice: 510,
    dates: "22-27 ตุลาคม 67",
  },
  {
    discount: "ลด 40%",
    image: Pro7Image,
    title: "สินค้าแนะนำ",
    oldPrice: 800,
    newPrice: 480,
    dates: "23-28 ตุลาคม 67",
  },
  {
    discount: "ลด 30%",
    image: Pro8Image,
    title: "ของเล่นสไตล์",
    oldPrice: 1000,
    newPrice: 700,
    dates: "24-29 ตุลาคม 67",
  },
];

const PromotionCard = ({ promotion }) => (
  <div className="frame-promotion">
    <div className="discount-label">{promotion.discount}</div>
    <img src={promotion.image} alt="promotion" className="pro-image" />
    <h3 className="promotion-text">{promotion.title}</h3>
    <div className="price-section">
      💰<span className="old-price">฿{promotion.oldPrice}</span>
      <span className="new-price">฿{promotion.newPrice}</span>
    </div>
    <h3 className="promo-dates">🛒 เริ่มโปรตั้งแต่ {promotion.dates}</h3>
  </div>
);

const Promotion = () => {
  const images = [ProImage, Pro1Image, Pro2Image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // จำนวนวินาที (3 ชั่วโมง)

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 2000); // เปลี่ยนทุก 1 วินาที

    return () => clearInterval(interval);
  }, []);

  //ส่วนที่เก็บคูปอง
  // สร้าง array สำหรับคูปอง พร้อมข้อมูลราคและวันหมดอายุที่แตกต่างกัน
  const coupons = [
    { price: 240, minOrder: 1600, expiryDate: "2024.10.31" },
    { price: 300, minOrder: 2000, expiryDate: "2024.11.15" },
    { price: 150, minOrder: 1200, expiryDate: "2024.10.20" },
    { price: 500, minOrder: 2500, expiryDate: "2024.12.01" },
  ];
  const [collectedCoupons, setCollectedCoupons] = useState([]);// ใช้ object เพื่อติดตามคูปองที่เก็บแล้ว
  const handleCollectCoupon = (index) => {
    // เพิ่ม index ของคูปองที่ถูกเก็บไปใน array
    setCollectedCoupons((prev) => [...prev, index]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 2 : 0)); // ลดเวลาทุกวินาที
    }, 2000); // 1000ms = 1 วินาที

    return () => clearInterval(intervalId);
  }, [images.length]);
  // สร้าง state เพื่อเก็บสถานะของข้อความปุ่ม
  const [buttonText, setButtonText] = useState("เก็บคูปอง");
  const [isUsed, setIsUsed] = useState(false); // เก็บสถานะว่าคูปองถูกใช้แล้วหรือยัง

  // ฟังก์ชันที่เปลี่ยนข้อความและสีเมื่อคลิกปุ่ม
  const handleButtonClick = () => {
    setButtonText("ใช้ทันที");
    setIsUsed(true); // เปลี่ยนสถานะว่าคูปองถูกใช้แล้ว
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")} น.`; // รูปแบบเวลา
  };

  return (
    <div className="promotion-page">
      <h1 className="promotion-title">PROMOTION 🎉</h1>
      <p className="promotion-subtitle">
        ᴇɴᴊᴏʏ ᴇxᴄʟᴜꜱɪᴠᴇ เมื่อซื้อสินค้าครบตามที่กำหนดรับไปเลยส่วนลด 50%!
      </p>

      {/* แสดงภาพปัจจุบัน */}
      <div className="image-container-pro">
        <img
          src={images[currentImageIndex]}
          alt="promotion"
          className="pro-image"
        />
      </div>

      {/* จุดแสดงภาพ */}
      <div className="dot-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)} // เปลี่ยนภาพเมื่อคลิกจุด
          />
        ))}
      </div>
      {/* คู่ปองลูกค้าใหม่ */}
      <div className="image-caption-box1">
        <div className="caption-container1">
          <img src={cat} alt="ลูกค้าใหม่" className="customer-image" />
          <div className={`image-caption1 ${isAnimating ? "grow" : ""}`}>
            ลูกค้าใหม่
          </div>
        </div>
        <div className="discount-message">
          สินค้าราคาพิเศษ + 🔖คู่ปองส่วนลด 50%
        </div>
      </div>
      {/* คู่ปองส่วนลด*/}
      <div className="image-caption-box2">
        <div className="image-caption-box3">
          <p className="image-caption2">INTERGETHER</p>
          <div className="image-caption3">
            <div className="discount-container">
              15-50%
              <span className="discount-label1">Off</span>
            </div>
            <p className="additional-text">
              สั่งซื้อขั้นต่ำ 50 บาท ลดสูงสุด 350 บาท
            </p>
            <div className="image-cutomer-box">
              <div className="cutomer-container">
                <p className="cutomer-caption">สำหรับสมาชิกใหม่</p>
              </div>
            </div>
          </div>
          <button
            className={`buy-customer ${isUsed ? "used" : ""}`}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>

        <div className="promotion-container">
          {promotionsData.map((promotion, index) => (
            <PromotionCard key={index} promotion={promotion} />
          ))}
        </div>
      </div>
      {/* เก็บคูปอง*/}

      <h1 className="promotion">ลดคุ้ม 🎉</h1>
      <div className="promotion-box">
        <div className="promotion-container-customer">
          <p className="promotion-caption">เติมคูปอง ทุกเที่ยงคืน 00.00 น.</p>
          <button className="buy-customer1">เงื่อนไขคูปอง</button>
        </div>
      </div>

     {/* การ์ดแสดงคูปอง */}
     <div className="coupon-container">
        {coupons.map((coupon, index) => (
          <div className="coupon-card" key={index}>
            <div className="coupon-content">
              <img src={pro9Image} alt="coupon" className="coupon-image" />
              <div className="coupon-text">
                <p className="coupon-price">฿{coupon.price}</p>
                <p className="coupon-details">สั่งซื้อตั้งแต่ ฿{coupon.minOrder}</p>
                <div className="divider"></div> {/* เส้นขีด */}
                <p className="coupon-expiry">วันหมดอายุ: {coupon.expiryDate}</p>
              </div>
              {/* ปุ่มเก็บคูปอง */}
              <button
                className={`coupon-button ${collectedCoupons.includes(index) ? "used" : ""}`}
                onClick={() => handleCollectCoupon(index)} // ส่ง index เป็น parameter
                disabled={collectedCoupons.includes(index)} // ปิดการใช้งานปุ่มเมื่อถูกเก็บแล้ว
              >
                {collectedCoupons.includes(index) ? "ใช้ทันที" : "เก็บคูปอง"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* กล่องคำบรรยายใต้ภาพ */}
      <div className="image-caption-box">
        <div className="caption-container">
          <p className="image-caption">FLASH SALE</p>
          <p className="time-caption">{formatTime(timeLeft)}</p>{" "}
          {/* แสดงเวลาที่ลดลง */}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
