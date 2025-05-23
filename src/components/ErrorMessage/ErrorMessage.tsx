import React from 'react';
import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;


