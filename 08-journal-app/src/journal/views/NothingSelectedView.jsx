import { StarOutline } from "@mui/icons-material";
import { Grid, Grid2, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 5,
      }}
    >
      <Grid item xs={12}>
        <StarOutline
          sx={{
            fontSize: 100,
            color: "white",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
