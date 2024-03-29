import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemDetail = ({ item, onAdd, initial }) => {
  const { title, img, description, price, stock } = item;

  return (
    <>
      <div style={{ minHeight: "50vh" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      align={"right"}
                    >
                      Precio: ${price} U.
                    </Typography>
                    {initial >= 1 ? (
                      <>
                        <Typography
                          variant="h7"
                          color="text.secondary"
                          align={"right"}
                        >
                          Actualmente tienes {initial} Unid de este producto en
                          tu carrito
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="h7"
                          color="primary"
                          align={"right"}
                        >
                          Aún no tienes este producto en tu carrito
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <ItemCountContainer
                    stock={stock}
                    onAdd={onAdd}
                    initial={initial}
                  />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img src={img} alt={title} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ItemDetail;
