import React from 'react';
import { useParams } from 'react-router-dom';
import s1Image from '../assets/s1.jpg'; 
import './styless.css'; // Import CSS

const BuyTicketSport = () => {
    const { id } = useParams();

    // ข้อมูลคอนเสิร์ต
    const sportDetails = {
        1: { 
            title: "ONE LUMPINEE", 
            date: "วันศุกร์ที่ 12 มกราคม 2567", 
            time: "19:30 น.", 
            location: "สนามมวยเวทีลุมพินี", 
            price: 1200,
            img: s1Image 
        },
        // เพิ่มข้อมูลคอนเสิร์ตอื่น ๆ ที่นี่
    };

    const sport = sportDetails[id]; 

    return (
        <div className="sport-page">
            {sport ? (
                <div className="concert-details">
                    {/* รูปภาพฝั่งซ้าย */}
                    <div className="image1">
                        <img src={sport.img} alt={sport.title} className="concert-image-large" />
                    </div>
                    {/* ข้อมูลฝั่งขวา */}
                    <div className="frame-text1">
                        <h3 className="title1">{sport.title}</h3>
                        <h3 className="date-time1"><span className="icon">📅</span>วันที่: {sport.date}</h3>
                        <h3 className="time1"><span className="icon">🕔</span>เวลา: {sport.time}</h3>
                        <h3 className="location1"><span className="icon">📍</span>สถานที่: {sport.location}</h3>
                        <div className="price-button-container">
                            <span className="price">ราคาเริ่มต้น: ฿{sport.price}</span>
                            <button className="buy-ticket-btn1">ซื้อบัตร</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="sport">ไม่พบการแข่งกีฬา!!!</p>
            )}
        </div>
    );
};

export default BuyTicketSport;
