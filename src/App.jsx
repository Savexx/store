import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import theme from './pages/config/theme.js'

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
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
