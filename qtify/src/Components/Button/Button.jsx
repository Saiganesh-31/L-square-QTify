import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = "primary" }) => {
  const classNames = `${styles.button} ${styles[variant]}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;