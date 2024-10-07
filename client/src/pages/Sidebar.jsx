// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // หากคุณใช้ react-router สำหรับการนำทาง

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/profile">โปรไฟล์</Link></li>
        <li><Link to="/concerts">คอนเสิร์ต</Link></li>
        <li><Link to="/sports">กีฬา</Link></li>
        {/* เพิ่มเมนูเพิ่มเติมตามที่คุณต้องการ */}
      </ul>
    </div>
  );
};

export default Sidebar;
