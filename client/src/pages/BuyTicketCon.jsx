import React from 'react';
import { useParams } from 'react-router-dom';
import cImage from '../assets/c.png';
import './styless.css'; // Import CSS

const ConcertId = () => {
    const { id } = useParams();

    // ข้อมูลคอนเสิร์ต
    const concertDetails = {
        1: { 
            title: "2024 ZEROBASEONE THE FIRST TOUR", 
            date: "วันเสาร์ที่ 5 ตุลาคม 2567", 
            time: "10:00 น. - 22:00 น.", 
            location: "อิมแพ็ค เอ็กซิบิชั่น เมืองทองธานี", 
            price: 4500,
            img: cImage 
        },
        // เพิ่มข้อมูลคอนเสิร์ตอื่น ๆ ที่นี่
    };

    const concert = concertDetails[id]; 

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
                        <h3 className="date-time1"><span className="icon">📅</span>วันที่: {concert.date}</h3>
                        <h3 className="time1"><span className="icon">🕔</span>เวลา: {concert.time}</h3>
                        <h3 className="location1"><span className="icon">📍</span>สถานที่: {concert.location}</h3>
                        <div className="price-button-container1">
                            <span className="price">ราคาเริ่มต้น: ฿{concert.price}</span>
                            <button className="buy-ticket-btn2">ซื้อบัตร</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="concert">ไม่พบคอนเสิร์ต!!!</p>
            )}
        </div>
    );
};

export default ConcertId;
