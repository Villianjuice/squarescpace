import { Btn } from "../../composables/button/Button"
import { SelectSmall } from "../../composables/Select"


export const Desc = () => {
  const items = ['ten', 'nine', 'eight']
  return (
    <div className="desc">
      <h3 className="desc__title">EARRING SIX FACES SCREW</h3>
      <p className="desc__code">SKU: GJ-E1SFS-S1</p>
      <p className="desc__price">4 900RUB</p>
      <SelectSmall items={items}/>
      <Btn onClick={() => {}} title='ADD TO CART' />
    </div>
  )
}
