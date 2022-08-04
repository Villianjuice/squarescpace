import { Route, Routes } from 'react-router-dom'

import Main from '../../pages/main/Main'
import { Navbar } from '../navbar/Navbar'
import {RowRun} from '../../composables/RowRun'
import Cart from '../../pages/cart/Cart'
import Item from '../../pages/item/Item'

import '../../scss/indes.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/item' element={<Item/>} />
      </Routes>
        <RowRun />

    </div>
  )
}

export default App