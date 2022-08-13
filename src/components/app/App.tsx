import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback, Navbar, Spinner } from '../index'
import { RowRun } from '../../composables'

import '../../scss/index.scss'

const Main = lazy(() => import('../../pages/main/Main'))
const Cart = lazy(() => import('../../pages/cart/Cart'))
const Item = lazy(() => import('../../pages/item/Item'))
const NotFound = lazy(() => import('../../pages/notFound/NotFound'))

const App = () => {
  return (
    <div className='app'>
      <div className='content'>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path='/'
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Main />
                </ErrorBoundary>
              }
            />
            <Route
              path='/cart'
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Cart />
                </ErrorBoundary>
              }
            />
            <Route
              path='/item/:id'
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Item />
                </ErrorBoundary>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <RowRun />
    </div>
  )
}

export default App
