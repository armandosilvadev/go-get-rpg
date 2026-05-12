import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'minusOne' | 'minusFive' | 'plusOne' | 'plusFive';
  text?: string;
}

const Button = ({ buttonStyle, text, ...props }: ButtonProps) => {
  let buttonText: string = '';

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

  return <button {...props}>{text ?? buttonText}</button>;
};

export default Button;
