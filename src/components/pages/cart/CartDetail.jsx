const CartDetail = ({ cart, clearCart, removeByID, totalPrice }) => {
  return (
    <div>
      {cart.map(({ id, title, quantity }) => (
        <div key={id}>
          <h2>Nombre: {title}</h2>
          <h2>cantidad: {quantity}</h2>
          <button onClick={() => removeByID(id)}>remover elemento</button>
        </div>
      ))}
      {cart.length !== 0 ? (
        <div>
          <h2>Total a pagar: ${totalPrice.toLocaleString()}</h2>
          <button onClick={clearCart}>limpiar carrito</button>
        </div>
      ) : (
        <h2>Tu carrito esta vacio</h2>
      )}
    </div>
  );
};

export default CartDetail;
