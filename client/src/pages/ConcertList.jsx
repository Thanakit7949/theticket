import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // เพิ่มการใช้งาน Slick Carousel
import './styles.css';
import image1 from '../assets/image1.jpg'; // ใช้เป็นรูปตัวอย่าง
import ball from '../assets/ball.jpg';
import non from '../assets/non.jpg'
import free from '../assets/ticketfree.jpg'
import bas from '../assets/bas.jpg';
import tennis from '../assets/tennis.jpg';
import labubu from '../assets/labubu.jpg';
import pop from '../assets/pop.jpg';
import pur from '../assets/pur.jpg'
import molly from '../assets/molly.jpg';
import toy from '../assets/toy.jpg';
import bbrick from '../assets/bbrick.jpg';
import luxury from '../assets/luxury.jpg';
import dis from '../assets/dis.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FlipPage from 'react-flip-page'; // Assuming you're using this component for flip effect

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null); // State สำหรับเก็บข้อมูลการแสดง Modal

  const flipPageRef = useRef(null); // Reference for the FlipPage component

  useEffect(() => {
    axios.get('http://localhost:3001/concerts')
      .then((res) => setConcerts(res.data))
      .catch((error) => console.error('Failed to fetch concerts:', error));
  }, []);

  const openModal = (concert) => {
    setSelectedConcert(concert);
  };

  const closeModal = () => {
    setSelectedConcert(null);
  };
  

  // ตัวเลือกการตั้งค่า Carousel
  const settings = {
    dots: true, // แสดงจุดเลื่อน
    infinite: true, // เลื่อนได้เรื่อยๆ
    speed: 500, // ความเร็วในการเลื่อน
    slidesToShow: 1, // จำนวนภาพที่แสดงในแต่ละครั้ง
    slidesToScroll: 1, // จำนวนภาพที่เลื่อนในแต่ละครั้ง
    autoplay: true, // เลื่อนอัตโนมัติ
    autoplaySpeed: 3000, // เลื่อนทุก 3 วินาที
  };

  return (
    <div className='concert-container'>
    <div className="bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        {/* Concerts Section */}
        <h2 className="text-gradient text-6xl font-extrabold mb-8 text-center relative">
          <span className="absolute left-0 -top-8 text-6xl text-pink-300">🎤</span>
          Upcoming Concerts
          <span className="absolute right-0 -top-8 text-6xl text-pink-300">🎶</span>
        </h2>

        <div className="carousel-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {concerts.slice(0, 3).map((concert) => (
            <div
              key={concert.id}
              className="concert-card bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105 w-[350px] h-[400px] cursor-pointer"
              onClick={() => openModal(concert)}
            >
              <img
                src={image1} // ใช้รูปตัวอย่าง
                alt={concert.name}
                className="concert-image w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="concert-title text-2xl font-semibold text-pink-500 mb-2">
                {concert.name}
              </h3>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700">{concert.date}</p>
                <p className="text-gray-600">{concert.location}</p>
              </div>
              
              <Link
                to={`/booking/${concert.id}`}
                className="book-btn bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition-all ease-in-out"
              >
                Book Now
              </Link>
            </div>
            
          ))}
        </div>        
</div>


        <div className="text-center mt-8">
          <Link
            to="/concerts"
            className="view-all-btn bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition-all ease-in-out"
          >
            View All Concerts
          </Link>
        </div>
        
        
        
        {/* Sports Section */}
        <h2 className="sports-events text-gradient text-6xl font-extrabold mb-8 text-center relative mt-12">
          <span className="absolute left-0 -top-8 text-6xl text-green-300">🏀</span>
          Upcoming Sports Events
          <span className="absolute right-0 -top-8 text-6xl text-green-300">⚽</span>
        </h2>

        <div className="sports-images-before-carousel mb-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="">
              <img
                src={tennis}
                alt="Sports Event 1"
                className="sports-image1"
              />
            </div>
            <div className="image-item">
              <img
                src={ball}
                alt="Sports Event 2"
                className="sports-image1"
              />
            </div>
            <div className="image-item">
              <img
                src={bas}
                alt="Sports Event 3"
                className="sports-image1"
              />
            </div>
            
          </div>
        </div>

        <div className="sports-container">
          <Slider {...settings}>
            <div className="sports-card bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105 w-[350px] h-[400px] cursor-pointer">
              <img
                src={bas} // ใช้รูปตัวอย่าง
                alt="Sports Event"
                className="sports-image w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="sports-card bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105 w-[350px] h-[400px] cursor-pointer">
              <img
                src={ball} // ใช้รูปตัวอย่าง
                alt="Sports Event"
                className="sports-image w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="sports-card bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105 w-[350px] h-[400px] cursor-pointer">
              <img
                src={tennis} // ใช้รูปตัวอย่าง
                alt="Sports Event"
                className="sports-image w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          </Slider>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/sports"
            className="view-all-btn bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition-all ease-in-out"
          >
            View All Sports Events
          </Link>
        </div>

        {/* Virtual Book Section */}
        <div className="virtual-book-section mt-16">
          <h2 className="text-gradient text-5xl lg:text-6xl font-extrabold mb-12 text-center relative z-10">
            <span className="absolute left-0 -top-8 text-6xl text-blue-300 animate-pulse">📖</span>
            Information
            <span className="absolute right-0 -top-8 text-6xl text-blue-300 animate-pulse">📚</span>
          </h2>

          <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        height: "600px",
        margin: "0 auto",
        border: "10px solid #f1f1f1",
        borderRadius: "20px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Page 1: แสดงรูปภาพ */}
      <div className="flip-container">
      {/* หน้า 1 */}
      <div className="flip-page">
        <div className="flip-page__front">
          <img
            src={free}
            alt="Page 1"
            className="w-full h-auto"
            style={{
              width: '100%',    // กำหนดให้กว้างเต็มที่
              height: '100%',   // กำหนดให้สูงเต็มที่
              objectFit: 'cover', // ใช้ cover ให้ครอบคลุมทั้งกรอบ
            }}
          />
        </div>

        {/* หน้า 2 */}
        <div className="flip-page__back">
          <img
            src={non}
            alt="Page 2"
            className="w-full h-auto"
            style={{
              width: '100%',    // กำหนดให้กว้างเต็มที่
              height: '100%',   // กำหนดให้สูงเต็มที่
              objectFit: 'cover', // ใช้ cover ให้ครอบคลุมทั้งกรอบ
            }}
          />
        </div>
      </div>
    </div>
    </div>
         
          
          {/* Virtual Book Content */}
          <div className="book-container">
            {/* Left Page */}
            <div className="book-page">
              <div className="page-content">
                <h3 className="text-4xl font-semibold text-blue-600 mb-6">Page 1: Introduction</h3>
                <p className="text-xl leading-relaxed">
                  Welcome to the Virtual Book for Sports Events! Explore all the exciting sports events happening around the world on the following pages.
                </p>
              </div>
            </div>

            {/* Right Page */}
            <div className="book-page">
              <div className="page-content">
                <h3 className="text-4xl font-semibold text-blue-600 mb-6">Page 2: Sports Event 1</h3>
                <p className="text-xl leading-relaxed">
                  Details about the first sports event. Discover more about it and dive into the experience very long time is it should to be now can I do it again Please let me talk about it .
                </p>
              </div>
            </div>
          </div>


          {/* Virtual Book Content */}
          <div className="book-container">
            {/* Left Page */}
            <div className="book-page">
              <div className="page-content">
                <h3 className="text-4xl font-semibold text-blue-600 mb-6">Page 1: Introduction</h3>
                <p className="text-xl leading-relaxed">
                  Welcome to the Virtual Book for Sports Events! Explore all the exciting sports events happening around the world on the following pages.
                </p>
              </div>
            </div>

            {/* Right Page */}
            <div className="book-page">
              <div className="page-content">
                <h3 className="text-4xl font-semibold text-blue-600 mb-6">Page 2: Sports Event 1</h3>
                <p className="text-xl leading-relaxed">
                  Details about the first sports event. Discover more about it and dive into the experience very long time is it should to be now can I do it again Please let me talk about it.
                </p>
              </div>
            </div>
          </div>

          
          

          {/* Pagination or next page button */}
          <div className="flex justify-center mt-6">
  <Link to="/news" className="next-page-btn">
    Go to Next Page
  </Link>
</div>
</div>





      {/* Products Section */}
      <div className="outer-container bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-16">
      
<div className="container bg-gradient-to-b from-gray-100 to-gray-200 text-black p-10 rounded-xl mt-12 shadow-2xl">
  <h2 className="text-4xl font-extrabold text-center mb-10 text-gradient">Our Exclusive Products 🧸</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Product Card 1 */}
    <div className="product-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={pur} alt="Product 1" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Product 1</h3>
      <p className="text-gray-600 mb-4">This is a premium product offering high quality and excellent performance.</p>
      <button className="book-btn px-5 py-3 text-white font-bold w-full">Buy Now</button>
    </div>

    {/* Product Card 2 */}
    <div className="product-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={pop} alt="Product 2" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Product 2</h3>
      <p className="text-gray-600 mb-4">Experience the best with our top-rated product that guarantees satisfaction.</p>
      <button className="book-btn px-5 py-3 text-white font-bold w-full">Buy Now</button>
    </div>

    {/* Product Card 3 */}
    <div className="product-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={labubu} alt="Product 3" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Product 3</h3>
      <p className="text-gray-600 mb-4">Crafted to perfection, this product provides durability and superior quality.</p>
      <button className="book-btn px-5 py-3 text-white font-bold w-full">Buy Now</button>
    </div>

     {/* Product Card 4 */}
     <div className="product-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={molly} alt="Product 1" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Product 4</h3>
      <p className="text-gray-600 mb-4">This is a premium product offering high quality and excellent performance.</p>
      <button className="book-btn px-5 py-3 text-white font-bold w-full">Buy Now</button>
    </div>

     {/* Product Card 5 */}
     <div className="product-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={toy} alt="Product 1" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Product 5</h3>
      <p className="text-gray-600 mb-4">This is a premium product offering high quality and excellent performance.</p>
      <button className="book-btn px-5 py-3 text-white font-bold w-full">Buy Now</button>
    </div>

     {/* Product Card 6 */}
     <div className="product-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={bbrick} alt="Product 1" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Product 6</h3>
      <p className="text-gray-600 mb-4">This is a premium product offering high quality and excellent performance.</p>
      <button className="book-btn px-5 py-3 text-white font-bold w-full">Buy Now</button>
    </div>
    
    <div className="flex1 justify-center mt-6">
  <Link to="/products" className="all-products-btn">
    Go to all products page
  </Link>
</div>
  </div>
  
</div>


</div>
    </div>
    {/* Promotion Section */}
    <div className="promo-container bg-gray-50 py-16">
  <div className="pro-container mx-auto px-4 lg:px-16">
    <div className="promotion-section mt-16">
      <h2 className="text-gradient3 text-5xl lg:text-6xl font-extrabold mb-12 text-center relative z-10">
        <span className="absolute left-0 -top-8 text-6xl text-yellow-300 animate-pulse">🏷️</span>
        Special Promotions
        <span className="absolute right-0 -top-8 text-6xl text-yellow-300 animate-pulse">💥</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* Promotion Card 1 */}
        <div className="promotion-card bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transform transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mt-4">Buy 1 Get 1 Free</h3>
          <img 
            src={luxury}
            alt="Promotion 1" 
            className="promotion-image w-24 h-16 object-cover mx-auto" 
          />
          <p className="text-gray-600 mt-2">Grab your favorite tickets now and get one free! Limited time offer.</p>
          <button className="mt-4 bg-yellow-400 text-white1 py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
            Get This Deal
          </button>
        </div>

        {/* Promotion Card 2 */}
        <div className="promotion-card bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transform transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mt-4">20% Off on Group Bookings</h3>
          <img 
            src={dis}
            alt="Promotion 2" 
            className="promotion-image w-24 h-16 object-cover mx-auto" 
          />
          <p className="text-gray-600 mt-2">Book for a group of 5 or more and enjoy a special discount!</p>
          <button className="mt-4 bg-yellow-400 text-white1 py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
            Book Now
          </button>
        </div>

        {/* Promotion Card 3 */}
        <div className="promotion-card bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transform transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mt-4">Exclusive VIP Access</h3>
          <img 
            src={luxury} 
            alt="Promotion 3" 
            className="promotion-image w-24 h-16 object-cover mx-auto" 
          />
          <p className="text-gray-600 mt-2">Join our VIP list for exclusive offers and early access to tickets!</p>
          <button className="mt-4 bg-yellow-400 text-white1 py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
            Join Now
          </button>
        </div>
      </div>
      
       <div className="text-center mt-8">
  <Link to="/promotions" className="pro-btn">
    View All Promotions
  </Link>
</div>
    </div>
  </div>
</div>

</div>

</div>



  );
};



export default ConcertList;
