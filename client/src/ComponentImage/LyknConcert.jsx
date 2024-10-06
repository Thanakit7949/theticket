import React from 'react';
import './stylecon.css'; // Import CSS file
import lyknImage from '../assets/lykn1.jpg'; // นำเข้ารูปภาพ
import lykn1Image from '../assets/lykn2.jpg'; // นำเข้ารูปภาพ
import lykn3Image from '../assets/lykn3.jpg'; // นำเข้ารูปภาพ
import img4 from '../assets/lykn4.jpg';
import img5 from '../assets/lykn5.jpg';
import img6 from '../assets/lykn6.jpg';
import img8 from '../assets/lykn7.jpg';
import img9 from '../assets/lykn8.jpg';
import img10 from '../assets/lykn9.jpg';

const LyknConcert = () => {
  // เก็บรูปภาพใน array
  const images = [img4, img5,
    img6,img8,img9,img10
  ];

  return (
    <div className="bus-concert-container">
      <h1>LYKN</h1>
      <p className="text-lykn-image">
      “ʟʏᴋɴ” ส่งซิงเกิลใหม่ “โฮ่ง! (ꜱᴜɢᴏɪ)” แนวเพลงแทนใจคนคลั่งรัก! </p>
      <img src={lyknImage} alt="Enhypen Concert" className="bus-concert-image" />
     
      
      <p className="text-lykn-image1">หากจะพูดถึงวงเกิร์ลกรุ๊ปที่มาแรงในขณะนี้ จะต้องมีชื่อ 3 สาว ᴘɪxxɪᴇ มาเบล, พิมมา และ อิงโกะ จากค่าย ʟɪᴛ ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ 
        ที่ไม่ว่าจะปล่อยเพลงหรือมี ชาเลนจ์ท่าเต้นไหน แฟนๆ หลายคนก็ให้ความสนใจเป็นอย่างมาก เพราะนอกจากสาวๆ 
        จะมีเพอร์ฟอร์แมนซ์ที่น่าจับตามองแล้ว แต่ละคนยังมีบุคลิกที่แตกต่างที่เต็มไปด้วยความน่ารักและมีเสน่ห์ ทำให้แฟนเพลงหลายคนต้องโดนตกกันไปเต็มๆ
       </p> 
        <img src={lykn1Image} alt="Enhypen Concert" className="got-concert-image1" />
      
   
 <p className="text-lykn-image1"> หลังจากมูฟออนจากเพลงเศร้าอย่าง “ความรักไม่ได้น่ากลัวขนาดนั้น (ᴛʀᴜꜱᴛ ᴍᴇ)” 
  5 หนุ่ม “ʟʏᴋɴ” วิลเลี่ยม-จักรภัทร, เลโก้-รพีพงศ์, นัท-ธนัท, ฮง-พิเชฐพงศ์, ตุ้ย-ชยธร บอยแบนด์สุดฮอต
   จาก “ʀɪꜱᴇʀ ᴍᴜꜱɪᴄ” ก็กลับมาเซอร์ไพร์สแฟน ๆ ด้วยแนวเพลงและสไตล์ดนตรีครั้งใหม่ ในซิงเกิลล่าสุด “โฮ่ง! (ꜱᴜɢᴏɪ)”
    ฉีกแนวเพลงใหม่ที่ไม่เคยทำมาก่อนกับ “ᴇʟᴇᴄᴛʀᴏɴɪᴄ ʜɪᴘʜᴏᴘ” โดยได้คนดนตรีคุณภาพอย่าง “ᴋᴀɴɢꜱᴏᴍᴋꜱ” 
    (แกงส้ม ธนทัต) มานั่งแท่น ᴘʀᴏᴅᴜᴄᴇʀ และแต่งเนื้อร้องให้</p>
<img src={lykn3Image} alt="lykn Concert" className="lykn-concert-image" />
 <p className="text-lykn-image1">และความโฮ่งยังไม่หมดแต่เพียงเท่านี้ เพราะในซิงเกิลนี้หนุ่มๆ 
  จาก ʟʏᴋɴ ก็ได้มาร่วมแต่งเพลงนี้ด้วยเช่นกัน ทั้ง “ᴛᴜɪ (ᴛᴜɪᴄʜᴀʏᴀᴛᴏʀɴ)” ที่เข้ามาทำในส่วนของเนื้อเพลง
   และ “ʜᴏɴɢ (ʜᴏɴɢꜱʜɪ)” & “ʟᴇɢᴏ (ʟᴇɢᴏ ʀᴀᴘᴇᴇᴘᴏɴɢ)” ที่เข้ามาร่วมแต่ง อีกทั้ง “ʟᴇɢᴏ (ʟᴇɢᴏ ʀᴀᴘᴇᴇᴘᴏɴɢ)” 
   ยังได้มีส่วนร่วมในการออกแบบท่าเต้นสร้างความโฮ่งใหม่ให้กับ ʟʏᴋɴ ด้วยลุคและสไตล์ที่ฉีกกว่าเดิมในส่วนของมิวสิควิดีโอเพลงนี้อีกด้วย</p>
 <div className="image-grid1">
   {images.map((image, index) => (
     <img key={index} src={image} alt={`img-${index + 1}`} className="grid-image" />
   ))}
 </div>
   
      <p className="text-lykn-image1">5 หนุ่ม “ʟʏᴋɴ” เผยว่า “สำหรับซิงเกิลนี้ถือเป็นเพลงที่ ʟʏᴋɴ กลับมาโชว์ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ 
        แน่นๆ เหมือนเดิม หลังปล่อยเพลงช้าฟังเพราะๆ ให้แฟนๆ ได้ฟังกัน และแม้เพลงนี้จะหนักไปที่การเต้น ใช้เอนเนอร์จี้เยอะ 
        แต่ก็มีความยากในเรื่องของการร้อง ด้วยความที่ท่อนฮุคจะมีคำที่เป็นคำฮิตในสมัยนี้ด้วยอย่างคำว่า ‘โฮ่ง’ 
        (ศัพท์วัยรุ่นที่นิยมใช้กันในช่วงนึงที่นิยามความท็อป ความโดดเด่น) และมีภาษาญี่ปุ่นในเนื้อร้อง พวกเราก็ตั้งใจพยายามทำกันอย่างเต็มที่ 
        เพื่อให้งานออกมาดีที่สุด ซึ่งที่มาของชื่อเพลงนี้ก็เป็นช่วงที่พวกเราได้คุยกับ ‘พี่แกงส้ม’ ระหว่างแต่งเนื้อร้อง โดยมี ‘ตุ้ย-ฮง-เลโก้’
         เข้ามาร่วมช่วยแต่งด้วย จนได้ชื่อว่า ‘โฮ่ง! (ꜱᴜɢᴏɪ)’ ออกมา กับเนื้อหาฟีลคลั่งรัก สร้างความมั่นใจให้กับคนที่เรารักในสไตล์ ʟʏᴋɴ 
         ว่าตอนนี้ไม่ต้องกังวลในความรักของเราเลย เพราะมันโฮ่งมาก ส่วนพาร์ทมิวสิควิดีโอก็จะมีความสตรีทมากขึ้น มีความซ่าๆ สไตล์ ʟʏᴋɴ เช่นกัน
          บวกกับมีกลิ่นอายความเป็นญี่ปุ่น สไตลิ่งที่ชัดเจนมากขึ้นกับแนววัยรุ่นญี่ปุ่น”</p>
      {/* Video section */}
   <div className="video-container">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/nFp4zjAARFs?si=soSlvxP3WeIMwBzQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <p className="text-lykn-image1">ติดตามซิงเกิลใหม่ “โฮ่ง! (ꜱᴜɢᴏɪ)”
         จากศิลปินวง “ʟʏᴋɴ” ได้แล้ววันนี้ ทาง ʏᴏᴜᴛᴜʙᴇ : ʀɪꜱᴇʀ ᴍᴜꜱɪᴄ 
         และ ᴍᴜꜱɪᴄ ꜱᴛʀᴇᴀᴍɪɴɢ ทุกช่องทาง และสามารถติดตามข่าวสารได้ที่
          ꜰᴀᴄᴇʙᴏᴏᴋ, ɪɴꜱᴛᴀɢʀᴀᴍ, x ของ ʀɪꜱᴇʀ ᴍᴜꜱɪᴄ และติดตามความเคลื่อนไหวอื่นๆ
           ได้ที่ ꜰᴀᴄᴇʙᴏᴏᴋ / ɪɴꜱᴛᴀɢʀᴀᴍ / x / ᴛɪᴋᴛᴏᴋ : ʟʏᴋɴ ᴏꜰꜰɪᴄɪᴀʟ</p>
</div>
    
  );
};

export default LyknConcert;
