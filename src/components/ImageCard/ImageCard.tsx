// src/components/ImageCard/ImageCard.tsx
import React from 'react';
import styles from './ImageCard.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
    // інші розміри, якщо потрібно
  };
  alt_description: string | null;
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
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
