import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";

const CartDetail = ({ id, title, quantity, removeByID }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <h3>{title} </h3>
          <h4>cantidad: {quantity} </h4>
        </CardActionArea>
        <CardActions style={{ justifyContent: "right" }}>
          <Button
            size="small"
            color="warning"
            variant="outlined"
            sx={{ justifyContent: "center" }}
            onClick={() => removeByID(id)}
          >
            Remover del carrito
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartDetail;
