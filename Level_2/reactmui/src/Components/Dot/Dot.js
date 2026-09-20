
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Dotstyle } from "../../Theme/Dotstyle";

const Dot = ({ sx }) => {
  const theme = useTheme();
  const styles = Dotstyle(theme);

  return (
    <Box
      sx={{
        ...styles.dot,
        ...sx,
      }}
    />
  );
};

export default Dot;