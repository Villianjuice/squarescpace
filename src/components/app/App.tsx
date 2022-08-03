import React from 'react'
import Main from '../main/Main'

import { Navbar } from '../navbar/Navbar'
import '../../scss/indes.scss'
// import RowRun from '../../composables/RowRun'

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      {/* <RowRun /> */}
    </div>
  )
}

export default App