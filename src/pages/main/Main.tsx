import React from 'react'

import './main.scss'

const Main = () => {
  return (
    <section className='main container-margin'>
      <div className="main__list">
        <div className="main__item">
          <div className="item-img">
            <img src="https://thumb.tildacdn.com/tild6232-3664-4332-b133-363464663638/-/resize/260x/-/format/webp/image.png" alt="item" />
          </div>
          <div className="item-about">
            <h3 className="about-title">RING SIX FACES SCREW</h3>
            <p className="about-price">7 900RUB</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Main