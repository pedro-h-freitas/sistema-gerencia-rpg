import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function Page() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2} width={250}>
            <Typography variant="h6" align="center">
              Login
            </Typography>

            <TextField fullWidth label="Email" type="email"></TextField>

            <TextField fullWidth label="Senha" type="password"></TextField>
          </Box>
        </CardContent>
        <CardActions>
          <Box width="100%" display="flex" justifyContent="center">
            <Button variant="contained">Entrar</Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
