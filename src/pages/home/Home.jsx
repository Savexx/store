import { Container, Box } from '@mui/material'

import { Outlet } from 'react-router-dom'
import Cart from '../../components/Cart/Cart.jsx'

function Home() {
  return (
    <>
      <Cart />
      <Container maxWidth='lg'>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}

export default Home
