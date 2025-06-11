import { Outlet } from 'react-router-dom'
import Cart from '../../components/Cart/Cart.jsx'

function Home() {
  return (
    <>
      <Cart />
      <Outlet />
    </>
  )
}

export default Home
