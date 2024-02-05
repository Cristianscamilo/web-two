export const ProductCard = ({ titulo, descrip, precio }) => {
  return (
    <div>
      <h4>{titulo} </h4>
      <h5>{descrip} </h5>
      <h5>{precio} USD </h5>
    </div>
  );
};
