import React from 'react';
import './stylecon.css'; // Import CSS file
import pixxiImage from '../assets/pixxi1.jpg'; // นำเข้ารูปภาพ
import pixxi2Image from '../assets/pixxi2.jpg'; // นำเข้ารูปภาพ
import pixxi3Image from '../assets/pixxi3.jpg'; // นำเข้ารูปภาพ
import img4 from '../assets/pixxi4.jpg';
import img5 from '../assets/pixxi5.jpg';
import img6 from '../assets/pixxi6.jpg';
import img8 from '../assets/pixxi8.jpg';
import img9 from '../assets/pixxi9.jpg';
import img10 from '../assets/pixxi10.jpg';

const PixxiConcert = () => {
  // เก็บรูปภาพใน array
  const images = [img4, img5,
    img6,img8,img9,img10
  ];

  return (
    <div className="bus-concert-container">
      <h1>PIXXIE</h1>
      <p className="text-pixxi-image">
      “ꜰᴇᴀᴛ” ซิงเกิลจาก “ᴘɪxxɪᴇ” ศิลปินชื่อดัง งานนี้เอ็มวีใส่เต็มทุกองค์ประกอบ แถมแรงบันดาลใจยังได้จากเทพนิยายกรีกอีก ทำเอาแฟนๆ ชอบหนักมาก... </p>
      <img src={pixxiImage} alt="pixxi Concert" className="bus-concert-image" />
     
      
      <p className="text-pixxi-image1">หากจะพูดถึงวงเกิร์ลกรุ๊ปที่มาแรงในขณะนี้ จะต้องมีชื่อ 3 สาว ᴘɪxxɪᴇ มาเบล, พิมมา และ อิงโกะ จากค่าย ʟɪᴛ ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ 
        ที่ไม่ว่าจะปล่อยเพลงหรือมี ชาเลนจ์ท่าเต้นไหน แฟนๆ หลายคนก็ให้ความสนใจเป็นอย่างมาก เพราะนอกจากสาวๆ 
        จะมีเพอร์ฟอร์แมนซ์ที่น่าจับตามองแล้ว แต่ละคนยังมีบุคลิกที่แตกต่างที่เต็มไปด้วยความน่ารักและมีเสน่ห์ ทำให้แฟนเพลงหลายคนต้องโดนตกกันไปเต็มๆ
       </p> 
        <img src={pixxi2Image} alt="pixxi Concert" className="pixxi-concert-image" />
      
   
 <p className="text-pixxi-image1"> ล่าสุด ᴘɪxxɪᴇ ส่งเพลงใหม่มาให้ได้ติดตามอย่าง ꜰᴇᴀᴛ ที่ย่อมาจากคําว่า ꜰᴇᴀᴛᴜʀɪɴɢ ที่แปลว่า ผู้ร่วมแสดงรับเชิญ
        ซึ่งมักจะถูกนํามาใช้เวลาศิลปินรับเชิญมาร้องเพลงร่วมกัน ซึ่งในเนื้อหาเพลงนี้หมายถึงความรู้สึกที่เรากําลังสนใจใครสักคน 
        จนอยากเชิญเขามาทําความรู้จักกัน เพลงนี้จึงถือเป็นสื่อกลางในการชวนมาทำความรู้จักกัน เหมือนในท่อนเพลงที่ร้องว่า 
        “ᴄᴏᴍᴇ ᴏɴ ʟᴇᴛ’ꜱ ꜰ-ᴇ-ᴀ-ᴛ”   </p>
<img src={pixxi3Image} alt="pixxi Concert" className="pixxi-concert-image1" />
 <p className="text-pixxi-image1">ในเอ็มวีเพลงนี้ก็เรียกได้ว่าทำถึง ใส่เต็มทุกองค์ประกอบ 
  นำเสนอในรูปแบบ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ และ ꜰᴀꜱʜɪᴏɴ โดยได้แรงบันดาลใจมาจากเทพนิยายกรีก 
  “เทพีมอยเร” สามพี่น้องปั่นด้ายแห่งโชคชะตา 3 สาว ᴘɪxxɪᴇ ก็เตรียมพร้อมที่จะมา ꜰᴇᴀᴛ 
  กับทุกคนด้วยเสน่ห์สุดเหลือล้น ซึ่งครั้งนี้ได้จัดเต็มความแฟนตาซีและแฟชั่นที่จะทำให้ทุกคนหลงเสน่ห์
   ฟังแล้วเหมือนถูกสะกดจิตไปกับเพลงนี้ จังหวะเพลงที่มีเอกลักษณ์เฉพาะตัวของพวกเธอ 
   ทำให้กลายมาเป็นอีกหนึ่งผลงานเพลงที่ไม่ควรพลาดเลยทีเดียว</p>
 <div className="image-grid1">
   {images.map((image, index) => (
     <img key={index} src={image} alt={`img-${index + 1}`} className="grid-image" />
   ))}
 </div>
   
      <p className="text-pixxi-image1">การออกแบบท่าเต้นของเพลงยังรวบรวมความรู้สึกขี้เล่นของความโรแมนติกที่มีเสน่ห์
     ท่าเต้นโดดเด่นเป็นพิเศษด้วยการเคลื่อนไหวที่เป็นธรรมชาติ 
      และแสดงออกถึงความเท่ ความน่ารัก และความเซ็กซี่ผ่านท่าเต้นของเพลง</p>
      {/* Video section */}
   <div className="video-container">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/1FztEbqElt0?si=rcrAjFTzlBQ7OkvI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <p className="text-pixxi-image1">ติดตามฟังเพลงและชมมิวสิควิดีโอ เพลง ꜰᴇᴀᴛ ได้ตั้งแต่วันนี้ที่ ʏᴏᴜᴛᴜʙᴇ/ ʟɪᴛ ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ และติดตามความเคลื่อนไหวต่างๆได้ทาง
 ɪɴꜱᴛᴀɢʀᴀᴍ: ʟɪᴛ ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ, ᴘɪxxɪᴇ, ꜰᴀᴄᴇʙᴏᴏᴋ: ʟɪᴛ ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ, ᴘɪxxɪᴇ, ᴛɪᴋᴛᴏᴋ: ʟɪᴛᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ.ᴛʜ, ᴘɪxxɪᴇ</p>
</div>
    
  );
};

export default PixxiConcert;
