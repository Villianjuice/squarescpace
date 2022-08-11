import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  width: string;
}

const Btn: React.FC<ButtonProps> = ({ title, onClick, width }) => {
  return (
    <button style={{ width }} className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export const Button = React.memo(Btn);
