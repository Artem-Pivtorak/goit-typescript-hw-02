import React from 'react';
import styles from './ImageCard.module.css';
import { UnsplashImage } from '../../api/unsplash'; // ✅ Імпорт

interface ImageCardProps {
  image: UnsplashImage; // ✅ Використовуємо той самий тип
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description ?? 'Image'}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
