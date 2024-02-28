const ItemCount = ({ counter, addOne, subOne, stock }) => {
  return (
    <>
      <button onClick={addOne} disabled={counter < stock ? false : true}>
        Añadir unidad
      </button>
      <h4>
        {counter} de {stock} Unidades en Stock
      </h4>
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        Restar unidad
      </button>
    </>
  );
};

export default ItemCount;
