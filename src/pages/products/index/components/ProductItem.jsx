import { cartActions } from '../../../../store/cartSlice.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, Snackbar } from '@mui/material'

export default function ProductItem({ product }) {
  const [open, setOpen] = useState(false)
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
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <Box>
        <div className='product-item'>
          <h3>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </h3>
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
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message='Added to cart! Please check your cart.'
      />
    </>
  )
}
