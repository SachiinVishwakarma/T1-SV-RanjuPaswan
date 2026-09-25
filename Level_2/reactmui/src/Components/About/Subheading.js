
import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Subheadingstyle } from "../../Theme/Subheadingstyle";

const Subheading = ({ txt }) => {
  const theme = useTheme();
  const styles = Subheadingstyle(theme);

  return (
    <Typography
      component="h2"
      sx={styles.heading}
    >
      {txt}
    </Typography>
  );
};

export default Subheading;