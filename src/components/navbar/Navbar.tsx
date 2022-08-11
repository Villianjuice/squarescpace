import React from "react";
import { Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import Badge from "@mui/material/Badge";
import { IconContext } from "react-icons";
import { GiShoppingBag } from "react-icons/gi";

import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

import Logo from "../../assets/squarespace-logo-horizontal-black.svg";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
  const selectItemsLength = createSelector(
    (state: RootState) => state.cart,
    (cart) => cart.items.length
  )

  const itemsLength = useAppSelector(selectItemsLength)

  return (
    <div className="container">
      <nav className="nav ">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">
              <img src={Logo} alt="logo" style={{ height: "70px" }} />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <IconContext.Provider value={{ size: "25px" }}>
                <Badge color="error" badgeContent={itemsLength}>
                  <GiShoppingBag color="black" />
                </Badge>
              </IconContext.Provider>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
