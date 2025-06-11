import { cartActions } from '../../../../store/cartSlice.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, Snackbar, Button } from '@mui/material'

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
    setSelectedSize(null)
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <Box
        sx={{
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '12px',
          boxShadow: '0px 2px 20px rgba(1, 41, 112, 0.1)',
        }}
      >
        <div className='product-item'>
          <h3>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img
            style={{ height: 100, width: 100 }}
            src={product.images[0]}
            alt={product.title}
          />
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button
              onClick={() => selectSize('S')}
              variant={selectedSize == 'S' ? 'contained' : 'outlined'}
            >
              Small
            </Button>
            <Button
              onClick={() => selectSize('M')}
              variant={selectedSize == 'M' ? 'contained' : 'outlined'}
            >
              Medium
            </Button>
            <Button
              onClick={() => selectSize('L')}
              variant={selectedSize == 'L' ? 'contained' : 'outlined'}
            >
              Large
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant={'contained'} onClick={addToCart}>
              Add to Cart
            </Button>
          </Box>
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
