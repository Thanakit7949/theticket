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
import gif1 from '../assets/con5.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/_on.gif';
import gif4 from '../assets/gif4.gif';

const Concerts = () => {
  // State for storing the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images
  const images = [conImage, con1Image, con3Image, con2Image, connImage, con4Image];
  
  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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
          <img src={busImage} alt="Bus" className="concerts-image" />
          <p>Bus</p> 
        </div>
        <div className="image-container">
          <img src={got7Image} alt="Got7" className="concerts-image" />
          <p>Got7</p> 
        </div>
        <div className="image-container">
          <img src={nctImage} alt="NCT" className="concerts-image" />
          <p>NCT</p> 
        </div>
        <div className="image-container">
          <img src={pixxiImage} alt="Pixxi" className="concerts-image" />
          <p>Pixxi</p> 
        </div>
        <div className="image-container">
          <img src={lyknImage} alt="Lykn" className="concerts-image" />
          <p>Lykn</p> 
        </div>
      </div>

      <p className="video-description">concert</p>
      
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
        <div className="gif-container">
          <img src={gif3} alt="GIF 3" className="gif-image" />
        </div>
        <div className="gif-container">
          <img src={gif4} alt="GIF 4" className="gif-image" />
        </div>
        <div className="gif-container">
          <img src={gif1} alt="GIF 1" className="gif-image" />
        </div>
        <div className="gif-container">
          <img src={gif2} alt="GIF 2" className="gif-image" />
        </div>
      </div>

      {/* Category buttons */}
      <div className="category-buttons">
        <button className="category-button selected">ทั้งหมด</button>
        <button className="category-button">THAI MASS</button>
        <button className="category-button">HIP-HOP</button>
        <button className="category-button">EDM</button>
        <button className="category-button">ASIAN</button>
        <button className="category-button">K-POP</button>
      </div>

     {/* Frame with image and text */}
     <div className="frames-row">
  <div className="frame-container">
    <img src={busImage} alt="Inside Frame" className="frame-image" />
    <p className="frame-text">Welcome to the Concert World!</p>
  </div>
  <div className="frame-container">
    <img src={busImage} alt="Inside Frame" className="frame-image" />
    <p className="frame-text">Welcome to the Concert World!</p>
  </div>
</div>

    </div>
  );
};

export default Concerts;
