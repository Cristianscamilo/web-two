import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <h2>Gracias por tu compra, el numero de confirmación es {orderId}</h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <h3 style={{marginLeft:"50px", marginTop:"20px"}}>FINALIZA TU COMPRA</h3>
          <Stack spacing={2} sx={{ width: 800, margin: 6, mb: 20}}>
          <Input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <Input
            type="text"
            placeholder="Ingresa tu telefono"
            onChange={capturar}
            name="phone"
          />
          <Input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />

          <Button type="submit">Comprar</Button>
          </Stack>
        </form>
      )}
    </div>
  );
};
