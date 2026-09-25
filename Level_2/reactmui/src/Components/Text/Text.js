import { Typography } from "@mui/material";

const Text = ({ txt, sx }) => {
  return (
    <Typography
      component="p"
      sx={sx}
    >
      {txt}
    </Typography>
  );
};

export default Text;