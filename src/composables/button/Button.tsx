import React from "react";

interface Button {
  title: string;
  onClick: () => void;
  width: string;
}

export const Btn: React.FC<Button> = ({ title, onClick, width }) => {
  return (
    <button style={{ width }} className="btn" onClick={onClick}>
      {title}
    </button>
  );
};
