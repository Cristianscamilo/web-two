import { useCount } from "../../../hooks/useCount";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd }) => {
  const { counter, addOne, subOne } = useCount( 1, stock );

  return (
    <>
      <ItemCount
        counter={counter}
        addOne={addOne}
        subOne={subOne}
        stock={stock}
        onAdd={onAdd}
      />
    </>
  );
};

export default ItemCountContainer;
