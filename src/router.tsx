import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { RootLayout as Root } from './layouts/Root'

import { ProductPage } from './pages/Product'
import { ProductsPage } from './pages/Products'
import { NotFoundPage } from './pages/NotFound'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/CartPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>
        <Route index element={<HomePage />} />
        <Route path='/produtos' element={<ProductsPage />} />
        <Route path='/produtos/:id' element={<ProductPage />} />

        <Route path='/produtos/carrinho' element={<CartPage />} />

      </Route>
    </>
  )
)
