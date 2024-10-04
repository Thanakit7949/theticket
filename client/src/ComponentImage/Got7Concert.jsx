import React from 'react';
import './stylecon.css'; // Import CSS file
import got7Image from '../assets/got71.jpeg'; // นำเข้ารูปภาพ
import got2Image from '../assets/got2.jpg'; // นำเข้ารูปภาพ
import got3Image from '../assets/got3.jpg';
import img4 from '../assets/got4.jpg';
import img5 from '../assets/got5.jpg';
import img6 from '../assets/got6.jpg';
import img7 from '../assets/got8.jpg';
import img8 from '../assets/got9.jpg';
import img9 from '../assets/got10.jpg';
import img10 from '../assets/got11.jpg';
import mv from '../assets/mv.jpg';

const BusConcert = () => {
  // เก็บรูปภาพใน array
  const images = [img4, img5,
    img6, img7, img8, img9,
    img10, 
  ];

  return (
    <div className="got-concert-container">
      <h1>GOT7</h1>
      <img src={got7Image} alt="got Concert" className="got-concert-image" />
      <p className="text-got-image">GOT7 ที่เป็นผลงานล่าสุด หลังแยกย้ายกันไปตามเส้นทางของตัวเอง พวกเขากลับมาทำตามสัญญาที่ให้ไว้กับอากาเซ่ “เราจะร้องเพลงให้คุณฟัง” เพลง “NANANA” ผลงานที่เป็นเหมือนเส้นทางที่บรรจบกันของดาว 7 ดวง</p>
      <img src={got2Image} alt="got Concert" className="got-concert-image1" />
      <p className="text-got-image1">เรียกได้ว่าเป็นศิลปินที่ฮอตไม่มีแผ่วจริงๆ สำหรับ 7 หนุ่ม GOT7
         แม้จะแยกย้ายกันไปทำงานเดี่ยวตามความถนัดของแต่ละคน แต่เมื่อได้โอกาสกลับมารวมตัวกันอีกครั้งแฟนคลับก็ยังให้การต้อนรับอย่างดี 
         หลังจากประกาศว่าจะคัมแบคและปล่อยอัลบั้มใหม่ ซึ่งเป็นการรียูเนียนรวมตัวสมาชิกทั้ง 7 แบบครบทีมก็ทำเอาเหล่าอากาเซ่ใจฟูไม่ไหว 
          เพราะนี่ถือว่าเป็นการคัมแบคคัมใจในรอบ 1 ปี 3 เดือน กับเพลงไตเติลที่มาพร้อมความสดใสอย่าง “NANANA” ที่พวกเขา GOT7 
          เชื่อว่าทุกคนจะสามารถสนุกไปด้วยกันได้!</p> 
          <img src={got3Image} alt="got Concert" className="got-concert-image" />
      <p className="text-got-image1">ต้องบอกว่าการตัดสินใจไม่ต่อสัญญากับค่าย JYP Entertainment ของ GOT7 เมื่อช่วงต้นปี 
        2021 นั้นถือเป็นข่าวที่บีบหัวใจเหล่าอากาเซ่อย่างมาก แต่ถึงแม้ว่าเหล่าเมมเบอร์จะไม่ได้ต่อสัญญากับค่าย พวกเขาก็ไม่ได้หายหน้าหายตาไปไหน 
        ยังคงเดินตามความฝันที่ตัวเองรัก แยกย้ายกันไปทำงานตามความถนัดของตัวเอง ซึ่งงานเดี่ยวของแต่ละคนก็ปังสะบัดไม่น้อยหน้าใคร </p>
      
   {/* ส่วนแสดงรูปภาพ 12 รูป */}
   <div className="image-grid">
   {images.map((image, index) => (
     <img key={index} src={image} alt={`img-${index + 1}`} className="grid-image" />
   ))}
 </div>
 <p className="text-got-image1">ในที่สุดเส้นทางของดาว 7 ดวงก็มาบรรจบกันอีกครั้ง กลับมารวมตัวกันในฐานะ GOT7 
  พร้อมปล่อยมินิอัลบั้มใหม่เอาใจเหล่าอากาเซ่ กับอัลบั้มพิเศษที่มีชื่อเดียวกับวง และเพลงไตเติลของอัลบั้มมีชื่อว่า “NANANA” 
  เพลงที่เต็มไปด้วยพลังและสีสันอันเป็นเอกลักษณ์ของวง GOT7 ที่ผสมผสานออกมาในสไตล์ป๊อปที่โดดเด่นด้วยไลน์เสียงกีตาร์ 
  อีกหนึ่งความพิเศษของเพลงนี้คือได้ลีดเดอร์ของวงอย่าง JayB มาเป็นโปรดิวเซอร์ร่วมกับ iHwak และ Royal Dive 
  ทำให้ภาพรวมของเพลงมีสีสันและซาวด์ดนตรีที่จัดจ้านขึ้น</p>
 
  
   {/* Video section */}
   <div className="video-container">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/IZ0oQ6nzKxo?si=nW8tMaEsljdkMfSA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <img src={mv} alt="got Concert" className="got-concert-image" />
      <p className="text-got-image1">ฟังเพลง ‘ɴᴀɴᴀɴᴀ’ ได้แล้ววันนี้ในทุกสตรีมมิ่งแพลตฟอร์มทาง ʏᴏᴜᴛᴜʙᴇ : GOT7</p>
</div>
    
  );
};

export default BusConcert;
