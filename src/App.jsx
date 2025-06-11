import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import ProductsIndex from './pages/productsIndex/ProductsIndex.jsx'
import Product from './pages/product/Product.jsx'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <ProductsIndex />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
