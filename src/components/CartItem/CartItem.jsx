import { cartActions } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  function addQuantity() {
    dispatch(cartActions.addItem(item))
  }

  function deductQuantity() {
    console.log('remove item', item)
    dispatch(cartActions.removeItem(item))
  }

  return (
    <li style={{ border: '1px solid red' }}>
      <div>
        id: {item.id}
        {item.title} - ${item.price}
      </div>
      <div>
        quantity:
        <div>
          <button onClick={deductQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={addQuantity}>+</button>
        </div>
      </div>
      <p>size: {item.size}</p>
      <p>price: {item.price}</p>
      <div stlye={{ display: 'flex', gap: '10px' }}>
        <div>Remove Item</div>
      </div>
    </li>
  )
}
