import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../navbar/Navbar'
import { RowRun } from '../../composables'
import { Spinner } from '../spinner/Spinner'

import '../../scss/indes.scss'

const Main = lazy(() => import('../../pages/main/Main'))
const Cart = lazy(() => import('../../pages/cart/Cart'))
const Item = lazy(() => import('../../pages/item/Item'))

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/item' element={<Item/>} />
        </Routes>
      </Suspense>
      
        <RowRun />

    </div>
  )
}

export default App