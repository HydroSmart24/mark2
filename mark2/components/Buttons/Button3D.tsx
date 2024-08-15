import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  
  // other props can be added as needed
}

const Button3D: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
      {children}
    </button>
  );
};

export default Button3D;
