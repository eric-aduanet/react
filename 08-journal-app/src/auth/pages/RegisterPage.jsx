import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registrar cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Tu nombre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Registrar cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
