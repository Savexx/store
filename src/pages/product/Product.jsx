import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/api/products'
import ProductItem from '../productsIndex/components/ProductItem'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id)
        console.log('Product data:', data)
        setProduct(data.data)
      } catch (err) {
        console.log('Error fetching product:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return (
    <div>
      {isLoading ? <span>Loading...</span> : <ProductItem product={product} />}
    </div>
  )
}
