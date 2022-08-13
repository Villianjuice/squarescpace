import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { IItem } from '../../ts/types'
import { Desc } from '../desc/Desc'
import { Spinner } from '../spinner/Spinner'
import { SwiperPlag } from '../swiperPlag/SwiperPlag'

export const ItemProduct = () => {
  const [item, setItem] = React.useState<IItem | null>(null)
  const [loading, setLoading] = React.useState(false)

  const { id } = useParams()

  const fetchItem = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<IItem>(
        `https://62f21f39b1098f15080bac7e.mockapi.io/items/${id}`,
      )
      setItem(data)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    fetchItem()
  }, [])

  return (
    <div className='item__product'>
      {loading && <Spinner width />}
      {item?.images ? <SwiperPlag images={item?.images} /> : null}
      {loading && <Spinner width />}
      {item ? <Desc {...item} /> : null}
    </div>
  )
}
