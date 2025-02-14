import { Block, TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export const Sidebar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: 0,
      }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Eric Fernandez
          </Typography>
          <Divider />
        </Toolbar>
        <List>
          {["Enero", "Febrero", "Marzo"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={"Blah blah blahsgagsagsahasbxbxzgsaghasdhadhasa"}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
