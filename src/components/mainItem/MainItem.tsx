import React from "react";
import { Link } from "react-router-dom";
import { IItem } from "../../ts/types";

interface MainItemProps extends IItem {}

export const MainItem: React.FC<MainItemProps> = ({
  mainImage,
  secondImage,
  title,
  price,
}) => {
  return (
    <Link to="/item/1" className="main__item">
      <div className="item-img">
        <img
          onMouseOver={(e) => (e.currentTarget.src = secondImage)}
          onMouseOut={(e) => (e.currentTarget.src = mainImage)}
          src={mainImage}
          alt="item"
        />
      </div>
      <div className="item-about">
        <h3 className="about-title">{title}</h3>
        <p className="about-price">{price}</p>
      </div>
    </Link>
  );
};
