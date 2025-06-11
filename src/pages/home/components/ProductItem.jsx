import { cartActions } from '../../../store/cartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function ProductItem({ product }) {
  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState(null)

  function selectSize(size) {
    setSelectedSize(size)
  }

  function addToCart() {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.')
      return
    }
    let newItem = { ...product, size: selectedSize }
    dispatch(cartActions.addItem(newItem))
  }

  return (
    <div className='product-item'>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img
        style={{ height: 40, width: 40 }}
        src={product.images[0]}
        alt={product.title}
      />
      <div>
        <button onClick={() => selectSize('S')}>Small</button>
        <button onClick={() => selectSize('M')}>Medium</button>
        <button onClick={() => selectSize('L')}>Large</button>

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}
