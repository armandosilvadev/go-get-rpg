import styles from './Button.module.css';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'minusOne' | 'minusFive' | 'plusOne' | 'plusFive';
  text?: string;
  classes?: string[];
}

const Button = ({ buttonStyle, text, classes, ...props }: ButtonProps) => {
  let buttonText: string = '';
  const classesString: string = classes?.join(' ') ?? '';

  switch (buttonStyle) {
    case 'minusOne':
      buttonText = '-1';
      break;
    case 'minusFive':
      buttonText = '-5';
      break;
    case 'plusOne':
      buttonText = '+1';
      break;
    case 'plusFive':
      buttonText = '+5';
      break;
  }

  return <button {...props} className={`${classesString} ${styles.btn}`}>{text ?? buttonText}</button>;
};

export default Button;
