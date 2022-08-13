import { useEffect } from 'react'
import { ErrorMessage, MainItem, Spinner } from '../../components'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchItems } from '../../redux/slices/ItemsSlice'

const Main = () => {
  const { loading, error, items } = useAppSelector((state) => state.items)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const skeletons = [...new Array(8)].map((_, index) => <Spinner key={index} />)

  return (
    <section className='main container-margin'>
      <div className='main__list'>
        {items && items.map((item) => <MainItem {...item} key={item.id} />)}
        {loading && skeletons}
      </div>
      {error && <ErrorMessage message={error} />}
    </section>
  )
}

export default Main
