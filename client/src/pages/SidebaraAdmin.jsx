// SidebarAdmin.js
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/admin/profile">โปรไฟล์</Link></li>
        <li><Link to="/admin/concerts">จัดการคอนเสิร์ต</Link></li>
        <li><Link to="/admin/manage-users">จัดการผู้ใช้</Link></li>
        <li><Link to="/admin/add-product">เพิ่มสินค้า</Link></li>
        <li><Link to="/admin/add-sport">เพิ่มกีฬา</Link></li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
