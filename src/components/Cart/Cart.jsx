import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Drawer, AppBar, Container, Box, Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import CartItem from '../CartItem/CartItem'

export default function Cart() {
  const [open, setOpen] = useState(false)
  const items = useSelector(state => state.cart.items)

  const hasItems = items.length > 0

  function toggleDrawer() {
    setOpen(prev => !prev)
  }

  return (
    <>
      <AppBar position='static' sx={{}}>
        <Container
          maxWidth='lg'
          sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}
        >
          <Badge
            badgeContent={hasItems ? items.length : undefined}
            color='primary'
            onClick={toggleDrawer}
            sx={{ cursor: 'pointer' }}
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Container>
      </AppBar>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer}>
        <Box sx={{ width: '100vw', padding: '20px', maxWidth: '300px' }}>
          <h1>My Cart</h1>
          {hasItems ? (
            <ul>
              {items.map((item, index) => (
                <CartItem key={`${item.id}-${index}`} item={item} />
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Box>
      </Drawer>
    </>
  )
}
