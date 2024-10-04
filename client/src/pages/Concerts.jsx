import React, { useState } from 'react';
import './styless.css'; // Import CSS file
import busImage from '../assets/bus.png';
import got7Image from '../assets/got7.jpg';
import nctImage from '../assets/nct.jpg';
import pixxiImage from '../assets/pixxie.jpg';
import lyknImage from '../assets/lykn.jpg';
import conImage from '../assets/concert.webp';
import con2Image from '../assets/con2.webp';
import con4Image from '../assets/con4.webp';
import con1Image from '../assets/con1.jpg';
import connImage from '../assets/conn.jpg';
import con3Image from '../assets/con3.jpg';
import cImage from '../assets/c.png';
import c1Image from '../assets/c1.jpg';
import c2Image from '../assets/c2.jpg';
import c3Image from '../assets/c3.jpg';
import c4Image from '../assets/c4.jpg';
import c5Image from '../assets/c5.jpg';
import c6Image from '../assets/c6.jpg';
import c7Image from '../assets/c7.jpg';
import c8Image from '../assets/c8.png';
import c9Image from '../assets/c9.png';
import c10Image from '../assets/c10.png';
import c11Image from '../assets/c11.png';
import gif1 from '../assets/con5.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/_on.gif';
import gif4 from '../assets/gif4.gif';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

const Concerts = () => {
  const navigate = useNavigate(); // เริ่มต้น useNavigate
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //อาร์เรย์ของภาพ
  const images = [conImage, con1Image, con3Image, con2Image, connImage, con4Image];
  
 // ฟังก์ชันสำหรับไปที่ภาพถัดไป
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
   // ฟังก์ชันสำหรับไปที่ภาพก่อนหน้า
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
    // ฟังก์ชันสำหรับจัดการการคลิกที่ภาพ
    const busImageClick = () => {
      navigate('/busconcert'); // นำทางไปยังหน้าที่ต้องการ
    };
    const got7ImageClick = () => {
      navigate('/got7concert'); // นำทางไปยังหน้าที่ต้องการ
    };
    const nctImageClick = () => {
      navigate('/nctconcert'); // นำทางไปยังหน้าที่ต้องการ
    };
    const pixxiImageClick = () => {
      navigate('/pixxiconcert'); // นำทางไปยังหน้าที่ต้องการ
    };
    const lyknImageClick = () => {
      navigate('/lyknconcert'); // นำทางไปยังหน้าที่ต้องการ
    };

  const [currentCategory, setCurrentCategory] = useState('ทั้งหมด');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด'); // สถานะสำหรับหมวดหมู่ที่ถูกเลือก
  // ข้อมูลคอนเสิร์ต
   const allConcerts = [
    { img: cImage, title: "❤️‍🔥: 2024 ZEROBASEONE THE FIRST TOUR", date: "🗓️: วันเสาร์ที่ 5 ตุลาคม 2567", time: "⏰: 10:00 น. - 22:00 น.", location: "📌: อิมแพ็ค เอ็กซิบิชั่น เมืองทองธานี" },
    { img: c1Image, title: "❤️‍🔥: 2024 YUGYEOM TOUR [TRUSTY] IN BANGKOK", date: "🗓️: 12 ตุลาคม 2567", time: "⏰: 10:00 น. - 22:00 น.", location: "📌: อิมแพ็ค อารีน่า เมืองทองธานี" },
    { img: c2Image, title: "❤️‍🔥: POLYCAT VIRTUAL MEMORY CONCERT", date: "🗓️: วันเสาร์ที่ 19 ตุลาคม 2567", time: "⏰: 12:00 น. - 23:00 น.", location: "📌: ธันเดอร์โดม เมืองทองธานี" },
    { img: c3Image, title: "❤️‍🔥: 2024 JIN YOUNG FANMEETING IN THAILAND", date: "🗓️: 14 ตุลาคม 2567", time: "⏰: 17:00 - 18:30 น.", location: "📌: Siam-Pic Ganesha Hall" },
    { img: c4Image, title: "❤️‍🔥: SUNSU Presents Sweet Sunshine With StangTari", date: "🗓️: 20 ตุลาคม 2567", time: "⏰: 14:00 - 20:00 น.", location: "📌: LIDO CONNECT HALL 2" },
    { img: c5Image, title: "❤️‍🔥: โอเอสเคเอ็น รียูเนี่ยน ปาร์ตี้ 2024", date: "🗓️: 26 ตุลาคม 2567", time: "⏰: 15:30 - 22:00 น.", location: "📌: โรงเรียนสวนกุหลาบวิทยาลัย นนทบุรี" },
    { img: c6Image, title: "❤️‍🔥: LONGLAY BEACH LIFE FESTIVAL 2024", date: "🗓️: 7-8 ธันวาคม 2567", time: "⏰: 14:00 - 23:59 น.", location: "📌: Diamond Beach (Longlay Beach)" },
    { img: c7Image, title: "❤️‍🔥: Knock Knock Knock: BUS 1st THAILAND FANCON TOUR", date: "🗓️: วันอาทิตย์ที่ 6 ตุลาคม 2567", time: "⏰: 13.00 น.", location: "📌: เทอร์มินอล ฮอลล์, ศูนย์การค้าเทอร์มินอล 21 โคราช", soldOut: true },
    { img: c8Image, title: "❤️‍🔥: PIT BABE 1st ANNIVERSARY (LEVEL UP) Presented by IN2IT", date: "🗓️: วันอาทิตย์ที่ 17 พฤศจิกายน 2567", time: "⏰: 18.00 น.", location: "📌: TRUE ICON HALL, 7th FLOOR, ICONSIAM" },
    { img: c9Image, title: "❤️‍🔥: TANATAT SOLO STAGE BIRTHDAY FAN MEETING: NIGHTMARE", date: "🗓️: วันเสาร์ที่ 5 ตุลาคม 2567", time: "⏰: 17:00 - 18:30 น.", location: "📌: Siam-Pic Ganesha Hall" },
    { img: c10Image, title: "❤️‍🔥: 2024 (G)I-DLE WORLD TOUR [iDOL] IN BANGKOK", date: "🗓️: วันเสาร์ที่ 19 ตุลาคม 2567", time: "⏰: 18:00 น.", location: "📌: อิมแพ็ค อารีน่า เมืองทองธานี" },
    { img: c11Image, title: "❤️‍🔥: TATE MCRAE THINK LATER WORLD TOUR 2024", date: "🗓️: วันเสาร์ที่ 2 พฤศจิกายน 2567", time: "⏰: 19:00 น.", location: "📌: ยูโอบี ไลฟ์, เอ็มสเฟียร์" },
  ];
  const thaiMassConcerts = [
    { img: c2Image, title: "❤️‍🔥: POLYCAT VIRTUAL MEMORY CONCERT", date: "🗓️: วันเสาร์ที่ 19 ตุลาคม 2567", time: "⏰: 12:00 น. - 23:00 น.", location: "📌: ธันเดอร์โดม เมืองทองธานี" },
    { img: c5Image, title: "❤️‍🔥: โอเอสเคเอ็น รียูเนี่ยน ปาร์ตี้ 2024", date: "🗓️: 26 ตุลาคม 2567", time: "⏰: 15:30 - 22:00 น.", location: "📌: โรงเรียนสวนกุหลาบวิทยาลัย นนทบุรี" },
    { img: c7Image, title: "❤️‍🔥: Knock Knock Knock: BUS 1st THAILAND FANCON TOUR", date: "🗓️: วันอาทิตย์ที่ 6 ตุลาคม 2567", time: "⏰: 13.00 น.", location: "📌: เทอร์มินอล ฮอลล์, ศูนย์การค้าเทอร์มินอล 21 โคราช", soldOut: true },
    { img: c8Image, title: "❤️‍🔥: PIT BABE 1st ANNIVERSARY (LEVEL UP) Presented by IN2IT", date: "🗓️: วันอาทิตย์ที่ 17 พฤศจิกายน 2567", time: "⏰: 18.00 น.", location: "📌: TRUE ICON HALL, 7th FLOOR, ICONSIAM" },
    { img: c9Image, title: "❤️‍🔥: TANATAT SOLO STAGE BIRTHDAY FAN MEETING: NIGHTMARE", date: "🗓️: วันเสาร์ที่ 5 ตุลาคม 2567", time: "⏰: 17:00 - 18:30 น.", location: "📌: Siam-Pic Ganesha Hall" },
  ];
  const tpopConcerts = [
    { img: c7Image, title: "❤️‍🔥: Knock Knock Knock: BUS 1st THAILAND FANCON TOUR", date: "🗓️: วันอาทิตย์ที่ 6 ตุลาคม 2567", time: "⏰: 13.00 น.", location: "📌: เทอร์มินอล ฮอลล์, ศูนย์การค้าเทอร์มินอล 21 โคราช", soldOut: true },
  ];
  const kpopConcerts = [
    { img: cImage, title: "❤️‍🔥: 2024 ZEROBASEONE THE FIRST TOUR", date: "🗓️: วันเสาร์ที่ 5 ตุลาคม 2567", time: "⏰: 10:00 น. - 22:00 น.", location: "📌: อิมแพ็ค เอ็กซิบิชั่น เมืองทองธานี" },
    { img: c1Image, title: "❤️‍🔥: 2024 YUGYEOM TOUR [TRUSTY] IN BANGKOK", date: "🗓️: 12 ตุลาคม 2567", time: "⏰: 10:00 น. - 22:00 น.", location: "📌: อิมแพ็ค อารีน่า เมืองทองธานี" },
    { img: c3Image, title: "❤️‍🔥: 2024 JIN YOUNG FANMEETING IN THAILAND", date: "🗓️: 14 ตุลาคม 2567", time: "⏰: 17:00 - 18:30 น.", location: "📌: Siam-Pic Ganesha Hall" },
    { img: c4Image, title: "❤️‍🔥: SUNSU Presents Sweet Sunshine With StangTari", date: "🗓️: 20 ตุลาคม 2567", time: "⏰: 14:00 - 20:00 น.", location: "📌: LIDO CONNECT HALL 2" },
    { img: c10Image, title: "❤️‍🔥: 2024 (G)I-DLE WORLD TOUR [iDOL] IN BANGKOK", date: "🗓️: วันเสาร์ที่ 19 ตุลาคม 2567", time: "⏰: 18:00 น.", location: "📌: อิมแพ็ค อารีน่า เมืองทองธานี" },
  ];
  const interConcerts = [
    { img: c6Image, title: "❤️‍🔥: LONGLAY BEACH LIFE FESTIVAL 2024", date: "🗓️: 7-8 ธันวาคม 2567", time: "⏰: 14:00 - 23:59 น.", location: "📌: Diamond Beach (Longlay Beach)" },
    { img: c11Image, title: "❤️‍🔥: TATE MCRAE THINK LATER WORLD TOUR 2024", date: "🗓️: วันเสาร์ที่ 2 พฤศจิกายน 2567", time: "⏰: 19:00 น.", location: "📌: ยูโอบี ไลฟ์, เอ็มสเฟียร์" },
  ];
  const displayedConcerts = currentCategory === 'ทั้งหมด' ? allConcerts 
    : currentCategory === 'THAI MASS' ? thaiMassConcerts 
    : currentCategory === 'T-POP' ? tpopConcerts 
    : currentCategory === 'K-POP' ? kpopConcerts
    : currentCategory === ' INTERNATIONAL' ? interConcerts
    : [];

  return (
    <div className="concerts-page">
      <h1 className='video-description'>ᴄᴏɴᴄᴇʀᴛꜱ</h1>
      <h4>This is the page for upcoming concerts!</h4>
      
      {/* Image gallery navigation */}
      <div className="image-gallery-navigation">
        <button className="nav-button prev" onClick={prevImage}>{'◄'}</button>
        <div className="image-container">
          <img src={images[currentImageIndex]} alt="Concert" className="image" />
        </div>
        <button className="nav-button next" onClick={nextImage}>{'►'}</button>
      </div>

      <p className="video-description">ᴇɴᴊᴏʏ ᴛʜɪꜱ ᴀᴍᴀᴢɪɴɢ ᴄᴏɴᴄᴇʀᴛ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ!</p>

      {/* Additional images */}
      <div className="image-gallery">
        <div className="image-container">
          <img src={busImage} alt="Bus" className="concerts-image"  onClick={busImageClick}  /> 
          <p>Bus</p> 
        </div>
        <div className="image-container">
          <img src={got7Image} alt="Got7" className="concerts-image" onClick={got7ImageClick} />
          <p>Got7</p> 
        </div>
        <div className="image-container">
          <img src={nctImage} alt="NCT" className="concerts-image" onClick={nctImageClick}/>
          <p>NCT</p> 
        </div>
        <div className="image-container">
          <img src={pixxiImage} alt="Pixxi" className="concerts-image" onClick={pixxiImageClick}/>
          <p>Pixxi</p> 
        </div>
        <div className="image-container">
          <img src={lyknImage} alt="Lykn" className="concerts-image" onClick={lyknImageClick}/>
          <p>Lykn</p> 
        </div>
      </div>

      <p className="video-description">moment concert</p>
      
      {/* Video section */}
      <div className="video-container">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/Qh3NVhWXOOE?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* GIF gallery */}
      <div className="gif-gallery">
        {[gif1, gif2, gif3, gif4].map((gif, index) => (
          <div className="gif-container" key={index}>
            <img src={gif} alt={`GIF ${index + 1}`} className="gif-image" />
          </div>
        ))}
      </div>
 {/* ปุ่มหมวดหมู่ */}
 <div className="category-buttons">
        {['ทั้งหมด', 'THAI MASS', 'T-POP',  'K-POP',' INTERNATIONAL'].map((category) => (
          <button 
            key={category} 
            className={`category-button ${selectedCategory === category ? 'active' : ''}`} 
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
<div className="frames-row">
  {displayedConcerts.map((item, index) => (
    <div className="concert-frame" key={index}>
      <img src={item.img} alt={`Frame ${index + 1}`} className="frame-image" />
      <div className="frame-text">
        <h3 className="title">{item.title}</h3>
        <p className="date-time">{item.date}</p>
        <p className="time">{item.time}</p> {/* แก้ไขให้ชื่อเป็น 'time' เพื่อให้ตรงกับ CSS */}
        <p className="location">{item.location}</p>
        {item.soldOut ? (
          <p className="sold-out-btn">Sold Out</p>
        ) : (
          <button className="buy-ticket-btn">ซื้อบัตร</button>
        )}
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Concerts;
