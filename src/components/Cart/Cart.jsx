import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem'

export default function Cart() {
  const items = useSelector(state => state.cart.items)

  const hasItems = items.length > 0

  return (
    <div>
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
    </div>
  )
}
