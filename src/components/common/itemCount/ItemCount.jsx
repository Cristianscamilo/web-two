import { Button } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne, stock }) => {
  return (
    <>
      <Button
        size="small"
        color="warning"
        variant="outlined"
        onClick={subOne}
        disabled={counter === 1 ? true : false}
      >
        -
      </Button>
      <h3>
        {counter}/{stock}
      </h3>
      <Button
        size="small"
        color="success"
        variant="outlined"
        onClick={addOne}
        disabled={counter < stock ? false : true}
      >
        +
      </Button>
    </>
  );
};

export default ItemCount;
