
const CartDetail = ({cart, clearCart, removeByID}) => {
  return (
    <div>
      {
      cart.map(({id, title, quantity}) => (
        <div key={id}>
          <h2>Nombre: {title}</h2>
          <h2>cantidad: {quantity}</h2>
          <button onClick={ ()=>removeByID(id) }>remover elemento</button>
        </div>
      ))
      }
      <button onClick={clearCart} >limpiar carrito</button>
    </div>
  )
}

export default CartDetail