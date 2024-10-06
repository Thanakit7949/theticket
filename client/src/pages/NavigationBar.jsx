import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-black text-white flex justify-around p-4">
      <Link to="/" className="text-red-500 font-bold">หน้าหลัก</Link>
      <Link to="/concerts" className="hover:text-red-500">คอนเสิร์ต</Link>
      <Link to="/sports" className="hover:text-red-500">กีฬา</Link>
      <Link to="/promotions" className="hover:text-red-500">โปรโมชั่น</Link>
      <Link to="/products" className="hover:text-red-500">สินค้า</Link>
      <Link to="/news" className="hover:text-red-500">ข่าวสาร</Link>
    </nav>
  );
};

export default NavigationBar;
