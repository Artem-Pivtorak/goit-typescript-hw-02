import React from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled?: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, disabled = false }) => (
  <button onClick={onClick} disabled={disabled} className={styles.button}>
    Load more
  </button>
);

export default LoadMoreBtn;