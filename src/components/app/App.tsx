import { Route, Routes } from 'react-router-dom'

import Main from '../../pages/main/Main'
import { Navbar } from '../navbar/Navbar'
import {RowRun} from '../../composables/RowRun'
import Cart from '../../pages/cart/Cart'

import '../../scss/indes.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
        <RowRun />

    </div>
  )
}

export default App