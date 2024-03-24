import { Button } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne, stock, onAdd }) => {
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
      <Button
        size="small"
        color="primary"
        variant="contained"
        sx={{ justifyContent: "center" }}
        onClick={()=>{onAdd(counter)}}
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
