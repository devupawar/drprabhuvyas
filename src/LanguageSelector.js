import React, { useState } from 'react';
import Modal from 'react-modal';
import i18n from './i18n';
import './LanguageSelector.css';

Modal.setAppElement('#root');

const LanguageSelector = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Select Language"
      className="Modal"
      overlayClassName="Overlay"
    >
      <p className='languageselector-head'>Please select your preferred language</p>
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('mr')}>Marathi</button>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('hi')}>Hindi</button>
      </div>
    </Modal>
  );
};

export default LanguageSelector;
