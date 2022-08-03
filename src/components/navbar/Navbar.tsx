import React from 'react'
import Badge from '@mui/material/Badge';
import { IconContext } from "react-icons";
import {GiShoppingBag} from 'react-icons/gi';


// import { Link } from 'react-router-dom'

import './Navbar.scss'
import Logo from '../../assets/squarespace-logo-horizontal-black.svg';

export const Navbar: React.FC = () => {
  return (
    <nav className='nav container'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <div >
            <img src={Logo} alt="logo" style={{height: '70px'}} />
          </div>
        </li>
        <li>
          <div >
          <IconContext.Provider value={{  size: '25px' }}>
            <Badge color="default"  badgeContent="1">
              <GiShoppingBag />
            </Badge>  
            </IconContext.Provider>
          </div>
        </li>
      </ul>
    </nav>
  )
}

// anchorOrigin={{horizontal: 'right', vertical: 'top' }}