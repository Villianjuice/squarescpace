import React from 'react'
import Badge from '@mui/material/Badge';
import { IconContext } from "react-icons";
import {GiShoppingBag} from 'react-icons/gi';


// import { Link } from 'react-router-dom'

import './Navbar.scss'
import Logo from '../../assets/squarespace-logo-horizontal-black.svg';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div className="container">
      <nav className='nav '>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/' >
              <img src={Logo} alt="logo" style={{height: '70px'}} />
            </Link>
          </li>
          <li>
            <Link to='/cart' >
            <IconContext.Provider value={{  size: '25px' }}>
              <Badge color="error"  badgeContent="1">
                <GiShoppingBag color='black'/>
              </Badge>  
              </IconContext.Provider>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// anchorOrigin={{horizontal: 'right', vertical: 'top' }}