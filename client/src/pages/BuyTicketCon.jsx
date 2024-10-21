import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BuyTicketCon = () => {
  const location = useLocation(); // รับ state ที่ส่งมาจาก Sports.js
  const navigate = useNavigate(); // สร้างฟังก์ชัน navigate
  const { concert } = location.state || {}; // รับข้อมูล concert จาก state

  // ตรวจสอบว่ามีข้อมูล concert หรือไม่
  console.log("Concert Data:", concert);

  const handleBuyTicket = () => {
    // นำทางไปยังหน้าที่ต้องการ
    navigate('/stage', { state: { concert } }); // ส่งข้อมูล concert ถ้าต้องการ
  };

  return (
    <div className="concert-page">
      {concert ? (
        <div className="concert-details">
          {/* รูปภาพฝั่งซ้าย */}
          <div className="image1">
            <img src={concert.img} alt={concert.title} className="concert-image-large" />
          </div>
          {/* ข้อมูลฝั่งขวา */}
          <div className="frame-text1">
            <h3 className="title1">{concert.title}</h3>
            <h3 className="date-time1"><span className="icon"></span>วันที่: {concert.date}</h3>
            <h3 className="time1"><span className="icon"></span>เวลา: {concert.time}</h3>
            <h3 className="location1"><span className="icon"></span>สถานที่: {concert.location}</h3>
            <div className="price-button-container">
              <span className="price">ราคาเริ่มต้น: ฿{concert.price}</span>
              <button className="buy-ticket-btn1" onClick={handleBuyTicket}>ซื้อบัตร</button> {/* เพิ่ม onClick */}
            </div>
          </div>
        </div>
      ) : (
        <p className="concert">ไม่พบคอนเสิร์ต!!!</p>
      )}
    </div>
  );
};

export default BuyTicketCon;
