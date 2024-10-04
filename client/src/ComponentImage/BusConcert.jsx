import React from 'react';
import './stylecon.css'; // Import CSS file
import busImage from '../assets/bus1.jpg'; // นำเข้ารูปภาพ
import bus1Image from '../assets/bus2.png'; // นำเข้ารูปภาพ
import img3 from '../assets/bus3.jpg';
import img4 from '../assets/bus4.jpg';
import img5 from '../assets/bus5.jpg';
import img6 from '../assets/bus6.jpg';
import img7 from '../assets/bus7.jpg';
import img8 from '../assets/bus8.jpg';
import img9 from '../assets/bus9.jpg';
import img10 from '../assets/bus10.jpg';
import img11 from '../assets/bus11.jpg';
import img12 from '../assets/bus12.jpg';
import img13 from '../assets/bus13.jpg';
import img14 from '../assets/bus14.jpg';

const BusConcert = () => {
  // เก็บรูปภาพใน array
  const images = [img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
    img13, img14,
  ];

  return (
    <div className="bus-concert-container">
      <h1>ʙᴜꜱ ʙᴇᴄᴀᴜꜱᴇ ᴏꜰ ʏᴏᴜ ɪ ꜱʜɪɴᴇ</h1>
      <p>ʙᴇᴄᴀᴜꜱᴇ ᴏꜰ ʏᴏᴜ ɪ ꜱʜɪɴᴇ</p>
      <img src={busImage} alt="Bus Concert" className="bus-concert-image" />
      <p className="text-below-image">‘TRANSFORMER’ เพลงใหม่ล่าสุดจาก ‘BUS because of you i shine’ ที่มาพร้อมกับความเท่ ดุดัน และโตขึ้นกว่าที่ผ่านมา</p>
      <img src={bus1Image} alt="Bus Concert" className="bus-concert-image1" />
      <p className="text-below-image1">‘ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ’ เพลงจาก ʙᴜꜱ ʙᴇᴄᴀᴜꜱᴇ ᴏꜰ ʏᴏᴜ ɪ ꜱʜɪɴᴇ กับการรวมตัวครั้งสำคัญของทีม 
        ᴘʀᴏᴅᴜᴄᴇʀ ระดับโลกอย่างทีม ᴍᴏɴᴏᴛʀᴇᴇ (ꜱᴏᴜᴛʜ ᴋᴏʀᴇᴀ) และ ทีม ᴛʜᴇ ʜᴇʟʟᴏ ɢʀᴏᴜᴘ (ᴜꜱᴀ) ร่วมกับทีม ꜱᴏɴʀᴀʏ ᴍᴜꜱɪᴄ 
        (ᴛʜᴀɪʟᴀɴᴅ) นำโดย ᴍᴏᴏꜰ, ʀᴏᴋᴍᴀɴ, ᴀʟᴀᴡɴ ที่เคยฝากผลงานไว้กับศิลปินชื่อดัง อาทิ ᴛᴠxǫ!, ᴄʜᴇɴ, ɴᴄᴛ127, ᴡᴀʏᴠ, 
        (ɢ)ɪ-ᴅʟᴇ, ɪᴠᴇ และอื่นๆ อีกมากมาย มาร่วมสรรสร้างค์กับ ᴘʀᴏᴅᴜᴄᴇʀ ฝั่งไทย อย่าง ᴍᴇᴋ ᴍᴀᴄʜɪɴᴀ และ ᴀᴜᴛᴛᴀ 
        โดยได้ ᴋᴇɴ ʟᴇᴡɪꜱ ผู้อยู่เบื้องหลังเพลงดังของ ᴛᴀʏʟᴏʀ ꜱᴡɪꜰᴛ และศิลปินอื่นๆ ระดับโลก มานั่งแท่นเป็น ᴇɴɢɪɴᴇᴇʀɪɴɢ ᴍɪxᴇʀ 
        (ɢʀᴀᴍᴍʏ ᴡɪɴɴᴇʀ) นำเสนอในแนวเพลง ᴇʟᴇᴄᴛʀᴏɴɪᴄ ʜɪᴘ ʜᴏᴘ ᴅᴀɴᴄᴇ รับรองการันตีซาวด์ดนตรี ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ ที่จัดจ้าน ดุเดือด 
        อย่างแน่นอน</p> 
      
      
   {/* ส่วนแสดงรูปภาพ 12 รูป */}
   <div className="image-grid">
   {images.map((image, index) => (
     <img key={index} src={image} alt={`img-${index + 1}`} className="grid-image" />
   ))}
 </div>
 <p className="text-below-image1">อีกทั้งทางด้านการออกแบบท่าเต้น ᴄʜᴏʀᴇᴏɢʀᴀᴘʜʏ ในครั้งนี้ ได้ ꜱᴇᴀ ɴɪ ผู้ออกแบบท่าเต้น 
        และเป็นครูฝึกสอนให้กับศิลปินดังอย่าง ɴᴄᴛ และเคยเป็นผู้ออกแบบท่าเต้นเพลง ʟɪᴍɪᴛ ʙʀᴇᴀᴋ จากรายการ 789 ꜱᴜʀᴠɪᴠᴀʟ
         มาออกแบบท่าสไตล์ ʜɪᴘ ʜᴏᴘ ผสมผสานการเต้น ʀᴏʙᴏᴛɪᴄ ᴅᴀɴᴄᴇ ꜱᴛʏʟᴇโดยมีกิมมิคคอนเซปท์การสร้างสรรค์ผลงานให้
          ʙᴜꜱ ʙᴇᴄᴀᴜꜱᴇ ᴏꜰ ʏᴏᴜ ɪ ꜱʜɪɴᴇ มีการเคลื่อนไหวเหมือนหุ่นยนต์ประกอบและแยกร่างกันเพื่อใ้ห้เกิดไดนามิคในภาพ 
          และสีสันใหม่ในผลงานของ ʙᴜꜱ ʙᴇᴄᴀᴜꜱᴇ ᴏꜰ ʏᴏᴜ ɪ ꜱʜɪɴᴇ</p>
 
  
   {/* Video section */}
   <div className="video-container">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/t1ePxnWG3us?si=VNW0SQ2VRz2ztRtH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-below-image1">ฟังเพลง ‘ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ’ ได้แล้ววันนี้ในทุกสตรีมมิ่งแพลตฟอร์ม 
      เเละรับชมเอ็มวีพร้อมกันวันที่ 30 ตุลาคม 2567 เวลา 19:00 น. ทาง ʏᴏᴜᴛᴜʙᴇ : ᴛᴀᴅᴀ ʟᴀʙᴇʟꜱ</p>
</div>
    
  );
};

export default BusConcert;
