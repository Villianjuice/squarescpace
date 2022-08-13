import React from 'react'
import { Link } from 'react-router-dom'
import { IItem } from '../../ts/types'

interface MainItemProps extends IItem {}

export const MainItem: React.FC<MainItemProps> = ({ mainImage, secondImage, title, price, id }) => {
  return (
    <Link to={`/item/${id}`} className='main__item'>
      <div className='item-img'>
        <img
          onMouseOver={(e) => (e.currentTarget.src = secondImage)}
          onMouseOut={(e) => (e.currentTarget.src = mainImage)}
          src={mainImage}
          alt='item'
        />
      </div>
      <div className='item-about'>
        <h3 className='title-text'>{title}</h3>
        <p className='typography'>{price} RUB</p>
      </div>
    </Link>
  )
}
