import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ProductCard = ({ title, img, price, id }) => {
  return (
    <>
      <Grid item xs={12} sm={12} lg={4}>
        <Item style={{height: '400px'}}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={img} alt={title} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Precio: ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{justifyContent: "center"}}>
              <Link to={`/item/${id}`}>
                <Button size="small" color="info" variant="contained" sx={{ justifyContent: 'center' }}>
                  Ir al Producto
                </Button>
              </Link>
          </CardActions>
        </Item>
      </Grid>
    </>
  );
};
