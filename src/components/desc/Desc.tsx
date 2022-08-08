import { Link } from "react-router-dom"

import { Btn, SelectSmall } from "../../composables"

export const Desc = () => {
  const items = ['ten', 'nine', 'eight']
  return (
    <div className="desc">
      <h3 className="desc__title">EARRING SIX FACES SCREW</h3>
      <p className="desc__code">SKU: GJ-E1SFS-S1</p>
      <p className="desc__price">4 900RUB</p>
      <SelectSmall items={items}/>
      <Btn width="250px" onClick={() => {}} title='ADD TO CART' />
      <p className="desc__desc">Описание товара</p>
      <p className="desc__text">
        Снаружи на каждой грани выдавлены буквы из логотипа GGLOOSH, внутри полностью логотип, чтобы не забыть, чье кольцо на руке
      </p>
      <p className="desc__text">
        Цвет: Silver
        Вес от 5,1гр (15 размер) до 17,2гр (22 размер)
        В комплекте брендированная полировочная салфетка для ювелирных изделий

        Для доставки по миру — оформить заказ здесь
      </p>
      <p className="desc__text">
        Для доставки по миру — <Link to={{ 
          pathname: '//t.me/villianjuice' }} target="_blank" style={{color: 'rgb(138, 215, 230)'}} >Оформить заказ</Link>
      </p>

    </div>
  )
}
