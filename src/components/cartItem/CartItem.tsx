import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hook'
import { incItem, decItem, removeItem } from '../../redux/slices/CartSlice'
import { IItemCart } from '../../ts/types'

export const CartItem: React.FC<IItemCart> = ({
  code,
  id,
  count,
  price,
  size,
  title,
  mainImage,
}) => {
  const dispatch = useAppDispatch()

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove item?')) {
      dispatch(removeItem(id))
    }
  }

  const incrementItem = () => {
    dispatch(incItem(id))
  }

  const decrementItem = () => {
    if (count === 1) {
      onClickRemove()
    }
    dispatch(decItem(id))
  }

  return (
    <div className='cartItem'>
      <div className='cartItem__img'>
        <img src={mainImage} alt={`${title} img`} />
      </div>
      <div className="cartItem__flex">
        <div className='cartItem__about'>
          <Link to='/' className='cartItem__title'>
            {title}
          </Link>
          <p className='cartItem__size'>Размер: {size}</p>
          <p className='cartItem__code'>{code}</p>
        </div>
        <div className='cartItem__count'>
          <AiOutlineMinusCircle size={15} onClick={decrementItem} className='cartItem__svg' />
          <div className='cartItem__count-num typography'>{count}</div>
          <AiOutlinePlusCircle size={15} onClick={incrementItem} className='cartItem__svg' />
        </div>
      </div>
      
      <div className='cartItem__price typography'>{price * count} RUB</div>
      <div style={{display: 'flex'}}>
        <TiDeleteOutline onClick={onClickRemove} size={20} className='cartItem__svg' />
      </div>
    </div>
  )
}
