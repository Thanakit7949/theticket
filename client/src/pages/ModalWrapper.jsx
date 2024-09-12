import React, { useState } from 'react';
import Register from './Register';

const ModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal} className="register-button">
        สมัครสมาชิก
      </button>
      {isModalOpen && <Register closeModal={closeModal} />}
    </div>
  );
};

export default ModalWrapper;
