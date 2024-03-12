import { useCount } from "../../../hooks/useCount";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  const { counter, addOne, subOne } = useCount( 1, stock );

  return (
    <>
      <ItemCount
        counter={counter}
        addOne={addOne}
        subOne={subOne}
        stock={stock}
      />
    </>
  );
};

export default ItemCountContainer;
