import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li key={id} className="ImageGalleryItem" onClick={openModal}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={alt} />
      </li>
      {isOpen && <Modal largeImg={largeImageURL} closeModal={closeModal} />}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  searchValue: PropTypes.string,
};
