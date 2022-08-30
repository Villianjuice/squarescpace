import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Desc } from '../desc/Desc'
import { ErrorMessage } from '../index'
import { Spinner } from '../spinner/Spinner'
import { SwiperPlag } from '../swiperPlag/SwiperPlag'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchProduct, unfetchProduct } from '../../redux/slices/ProductSlice'

export const ItemProduct = () => {
  const {item, loading, error} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch()

  const {id} = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id))

      return () => {
        dispatch(unfetchProduct())
      }
    }
  }, [id, dispatch])

  return (
    <>
      <div className='item__product'>
        {loading && 
          <>
            <Spinner width /> 
            <Spinner width /> 
          </> 
        }
        {item && 
        <>
          <SwiperPlag images={item.images} />
          <Desc {...item} /> 
        </>
        }
      </div>
      
      {error && <ErrorMessage message={error} />}
      
    </>
    

  )
}
