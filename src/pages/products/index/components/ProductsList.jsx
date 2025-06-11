import { useState, useEffect } from 'react'
import { getProducts } from '../../../../services/api/products.js'

import ProductItem from './ProductItem.jsx'

export default function ProductsList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({ limit: 10, offset: 0 })
        setProducts(response.data.products || [])
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='products-list'>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
