import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { UnsplashImage } from '../../api/unsplash';

interface ImageModalProps {
  image: UnsplashImage;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => (
  <Modal
    isOpen={true}
    onRequestClose={onClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <img src={image.urls.full} alt={image.alt_description ?? ''} />
    <button onClick={onClose} className={styles.closeBtn}>Close</button>
  </Modal>
);

export default ImageModal;

