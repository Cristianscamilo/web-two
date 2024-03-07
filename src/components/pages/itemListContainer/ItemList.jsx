import { ProductCard } from "../../common/productCard/ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemList = ({ items }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {items.map(({ id, title, img, price }) => {
            return (
              <ProductCard
                key={id}
                title={title}
                img={img}
                price={price}
                id={id}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ItemList;
