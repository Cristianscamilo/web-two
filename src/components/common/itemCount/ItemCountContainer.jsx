import { useCount } from "../../../hooks/useCount";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const { counter, addOne, subOne } = useCount( initial, stock );

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
