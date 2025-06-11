export default function ProductItem({ product }) {
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
        <div>Small</div>
        <div>Medium</div>
        <div>Large</div>

        <button>Add to Cart</button>
      </div>
    </div>
  )
}
