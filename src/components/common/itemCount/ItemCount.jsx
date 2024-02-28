const ItemCount = ({ counter, addOne, subOne, stock }) => {
  return (
    <>
      <button onClick={addOne} disabled={counter < stock ? false : true}>
        Añadir unidad
      </button>
      <h3>
        {counter} de {stock} Unidades en Stock
      </h3>
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        Restar unidad
      </button>
    </>
  );
};

export default ItemCount;
