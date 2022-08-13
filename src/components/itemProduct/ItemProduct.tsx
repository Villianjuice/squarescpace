import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { IItem } from '../../ts/types'
import { Desc } from '../desc/Desc'
import { ErrorMessage } from '../index'
import { Spinner } from '../spinner/Spinner'
import { SwiperPlag } from '../swiperPlag/SwiperPlag'

export const ItemProduct = () => {
  const [item, setItem] = useState<IItem | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const { id } = useParams()

  const fetchItem = useCallback( async () => {
    setLoading(true)
    setError(null)
    try {
      const { data } = await axios.get<IItem>(
        `https://62f21f39b1098f15080bac7e.mockapi.io/items/${id}`,
      )
      setItem(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError('Server error!')
    }
 }, [id])


  useEffect(() => {
    fetchItem()
  }, [fetchItem])

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
