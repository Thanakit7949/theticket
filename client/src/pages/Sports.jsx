import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styless.css';
import sportImage from '../assets/sports.jpg';
import sport1Image from '../assets/sports1.jpg';
import sport2Image from '../assets/sport2.webp';
import sport3Image from '../assets/sport3.jpg';
import sport4Image from '../assets/sport4.jpg';
import sport5Image from '../assets/sport5.jpg'; 
import sport6Image from '../assets/sport6.jpg'; 
import sport7Image from '../assets/sport7.webp'; 
import sport8Image from '../assets/sport9.jpg'; 
import sport9Image from '../assets/sport10.jpg'; 
import sport10Image from '../assets/sport11.jpg'; 
import s1Image from '../assets/s1.jpg'; 
import s2Image from '../assets/s2.png'; 
import s3Image from '../assets/s3.png'; 
import s4Image from '../assets/s4.png'; 
import s5Image from '../assets/s5.png'; 
import s6Image from '../assets/s6.png'; 
import s7Image from '../assets/s7.png'; 

const Sports = () => {
  const navigate = useNavigate(); // สร้าง instance ของ navigate
  const [currentCategory, setCurrentCategory] = useState('ทั้งหมด');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด'); // สถานะสำหรับหมวดหมู่ที่ถูกเลือก
  // ข้อมูลคอนเสิร์ต
   const allSports = [
    { img: s1Image, title: "❤️‍🔥: ONE LUMPINEE", date: "🗓️: วันศุกร์ที่ 12 มกราคม 2567", time: "⏰:  19:30 น.", location: "📌: สนามมวยเวทีลุมพินี", id: 1 },
    { img: s2Image, title: "❤️‍🔥: MUANGTHONG UNITED", date: "🗓️: วันอาทิตย์ที่ 18 สิงหาคม 2567", time: "⏰: 18.00 น.", location: "📌: ธันเดอร์โดม สเตเดี้ยม", id: 2 },
    { img: s3Image, title: "❤️‍🔥: MUANGTHONG UNITED Thai League Matchday", date: "🗓️: วันอาทิตย์ที่ 18 สิงหาคม 2567", time: "⏰: 20.00 น.", location: "📌: ธันเดอร์โดม สเตเดี้ยม", id: 3 },
    { img: s4Image, title: "❤️‍🔥: Muangthong United AFC Champions League Two", date: "🗓️: วันพฤหัสบดีที่ 5 ธันวาคม 2567", time: "⏰: 19.00 น.", location: "📌: สนามราชมังคลากีฬาสถาน", id: 4 },
    { img: s5Image, title: "❤️‍🔥: ONE Fight Night 25 : Nicolas vs. Eersel II", date: "🗓️: วันเสาร์ที่ 5 ตุลาคม 2567", time: "⏰: 07.00 น.", location: "📌: สนามมวยเวทีลุมพินี", id: 5 },
    { img: s6Image, title: "❤️‍🔥: ฟุตบอลชิงถ้วยพระราชทาน คิงส์คัพ ครั้งที่ 50 ประจำปี 2567", date: "🗓️: วันศุกร์ที่ 11 ตุลาคม 2567", time: "⏰: 16.30 น.", location: "📌: สนามกีฬาติณสูลานนท์", id: 6 },
    { img: s7Image, title: "❤️‍🔥: ASEAN Mitsubishi Electric Cup 2024", date: "🗓️: วันอังคารที่ 15 ตุลาคม 2567", time: "⏰: 19.30 น.", location: "📌: Chonburi stadium", id: 7 },
  ];
  const boxingSports = [
    { img: s1Image, title: "❤️‍🔥: ONE LUMPINEE", date: "🗓️: วันศุกร์ที่ 12 มกราคม 2567", time: "⏰:  19:30 น.", location: "📌: สนามมวยเวทีลุมพินี",id:1 },
    { img: s5Image, title: "❤️‍🔥: ONE Fight Night 25 : Nicolas vs. Eersel II", date: "🗓️: วันเสาร์ที่ 5 ตุลาคม 2567", time: "⏰: 07.00 น.", location: "📌: สนามมวยเวทีลุมพินี" ,id:5 },
    ];
  const ballSports = [
    { img: s2Image, title: "❤️‍🔥: MUANGTHONG UNITED", date: "🗓️: วันอาทิตย์ที่ 18 สิงหาคม 2567", time: "⏰: 18.00 น.", location: "📌: ธันเดอร์โดม สเตเดี้ยม" ,id:2},
    { img: s3Image, title: "❤️‍🔥: MUANGTHONG UNITED Thai League Matchday", date: "🗓️: วันอาทิตย์ที่ 18 สิงหาคม 2567", time: "⏰: 20.00 น.", location: "📌: ธันเดอร์โดม สเตเดี้ยม" ,id:3},
    { img: s4Image, title: "❤️‍🔥: Muangthong United AFC Champions League Two", date: "🗓️: วันพฤหัสบดีที่ 5 ธันวาคม 2567", time: "⏰: 19.00 น.", location: "📌: สนามราชมังคลากีฬาสถาน",id:4 },
  ];
  const otherSports = [
    { img: s6Image, title: "❤️‍🔥: ฟุตบอลชิงถ้วยพระราชทาน คิงส์คัพ ครั้งที่ 50 ประจำปี 2567", date: "🗓️: วันศุกร์ที่ 11 ตุลาคม 2567", time: "⏰: 16.30 น.", location: "📌: สนามกีฬาติณสูลานนท์" ,id:6},
    { img: s7Image, title: "❤️‍🔥: ASEAN Mitsubishi Electric Cup 2024", date: "🗓️: วันอังคารที่ 15 ตุลาคม 2567", time: "⏰: 19.30 น.", location: "📌: Chonburi stadium" ,id:7},
     ];
  const displayedConcerts = currentCategory === 'ทั้งหมด' ? allSports 
    : currentCategory === 'BOXING' ? boxingSports 
    : currentCategory === 'FOOTBALL' ? ballSports 
    : currentCategory === 'OTHER' ? otherSports
    : [];

    const handleBuyTicket = (SportId) => {
      navigate(`/buy-ticketSport/${SportId}`); // นำทางไปยังหน้าซื้อบัตร
    };
  return (
    <div className="sport-page">
      <h1 className="text-sports">🏐 ꜱᴘᴏʀᴛꜱ 🏀</h1>
      {/* Video section */}
      <div className="video-container1">
  <iframe
    src="https://www.youtube.com/embed/1IM9nF6uOr0?autoplay=1&mute=1"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="video-iframe"
  ></iframe>
</div>
<div className="text-container">
  <h1 className="text-sports1">ประเภทการแข่งขันกีฬา</h1>
  <h1 className="text-sports2">ᴛʜᴇ ᴛʀᴏᴘʜʏ ɪꜱ ɪɴ ꜰʀᴏɴᴛ ᴏꜰ ʏᴏᴜ. ᴡʜᴇᴛʜᴇʀ ʏᴏᴜ ᴀʀᴇ ᴀꜰʀᴀɪᴅ ᴏʀ ʙʀᴀᴠᴇ ɪꜱ ɪɴ ʏᴏᴜʀ ʜᴇᴀʀᴛ.</h1>
</div>

<div className="category-container">
    <div className="image-gallery1">
    <div className="image-container1">
            <img src={sport5Image} alt="ฟุตบอล" />
            <p className="category-label">แบตมินตัน</p>
        </div>
        <div className="image-container1">
            <img src={sport2Image} alt="การวิ่ง" />
            <p className="category-label">บาสเก็ตบอล</p>
        </div>
        <div className="image-container1">
            <img src={sport3Image} alt="ยิม" />
            <p className="category-label">ฟุตบอล</p>
        </div>
        <div className="image-container1">
            <img src={sport4Image} alt="ฟุตบอล" />
            <p className="category-label">วอลเลย์บอล</p>
        </div>
        <div className="image-container1">
            <img src={sport6Image} alt="ฟุตบอล" />
            <p className="category-label">ปิงปอง</p>
        </div>
    </div>
</div>

<div className="text-container">
  <h1 className="text-sports1">การแข่งขันกีฬากับผู้ต่อสู้</h1>
  <h1 className="text-sports2">ᴛʜᴇ ᴏɴʟʏ ᴡᴀʏ ᴛᴏ ꜱᴜᴄᴄᴇᴇᴅ ɪɴ ꜱᴘᴏʀᴛꜱ ɪꜱ ᴛᴏ ᴋᴇᴇᴘ ᴘᴜꜱʜɪɴɢ ʏᴏᴜʀꜱᴇʟꜰ ꜰᴜʀᴛʜᴇʀ ᴇᴠᴇʀʏ ᴅᴀʏ.</h1>
</div>

      <div className="image-hover-container">
        <img src={sportImage} alt="sport" className="sport-image first-image" />
        <img src={sport1Image} alt="sport" className="sport-image hover-image" />
      </div>
     
      <div className="new-category-container">
    <div className="new-image-gallery">
        <div className="new-image-container">
            <img src={sport7Image} alt="กีฬา 1" />
        </div>
        <div className="new-image-container">
            <img src= {sport10Image}alt="กีฬา 2" />
        </div>
        <div className="new-image-container">
            <img src={sport9Image} alt="กีฬา 3" />
        </div>
        <div className="new-image-container">
            <img src={sport8Image}  alt="กีฬา 4" />
        </div>
    </div>
</div>

 {/* ปุ่มหมวดหมู่ */}
 <div className="category-buttons1">
        {['ทั้งหมด', 'BOXING', 'FOOTBALL',  'OTHER'].map((category) => (
          <button 
            key={category} 
            className={`category-button1 ${selectedCategory === category ? 'active' : ''}`} 
            onClick={() => {
              setCurrentCategory(category);
              setSelectedCategory(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>

{/* เฟรมที่มีภาพและข้อความ */}
<div className="frames-row-sport">
        {displayedConcerts.map((item, index) => (
    <div className="sport-frame" key={index}>
      <img src={item.img} alt={`Frame ${index + 1}`} className="frame-image" />
      <div className="frame-text">
        <h3 className="title">{item.title}</h3>
        <p className="date-time">{item.date}</p>
        <p className="time">{item.time}</p> {/* แก้ไขให้ชื่อเป็น 'time' เพื่อให้ตรงกับ CSS */}
        <p className="location">{item.location}</p>
        {item.soldOut ? (
          <p className="sold-out-btn">Sold Out</p>
        ) : (
          <button className="buy-ticket-btn" onClick={() => handleBuyTicket(item.id)}>ซื้อบัตร</button>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
    
  );
};

export default Sports;
