import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classes?: string[];
}

const Input = ({ classes, ...props }: InputProps) => {
  const classesString: string = classes?.join() ?? '';

  return (
    <input
      {...props}
      className={`${classesString}`}
    />
  );
};

export default Input;
