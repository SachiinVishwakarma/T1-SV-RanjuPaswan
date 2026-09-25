
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Navbtn from "./Button/Navbtn";
import Colorbtn from "./Button/Colorbtn";

import { navbarcss } from "../Theme/Navbarstyle";

const Navbar = () => {
  const theme = useTheme();
  const styles = navbarcss(theme);

  return (
    <AppBar sx={styles.navbar}>
      <Toolbar sx={styles.toolbar}>

        <Typography sx={styles.logo}>
          WebTech Practice
        </Typography>

        <Box sx={styles.navlinks}>

          <Navbtn href="#abouttext" txt="About" />

          <Navbtn  href="#included" txt="Services" />

          <Navbtn txt="Theme" />

          <Navbtn txt="Login" />

          <Colorbtn txt="Sign Up" />

        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



