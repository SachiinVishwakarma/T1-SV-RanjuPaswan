import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Servicesstyle } from "../../Theme/Servicesstyle";

const Servicesheading = () => {
  const theme = useTheme();
  const styles = Servicesstyle(theme);

  return (
    <Typography sx={styles.heading}>
      Authentication Templates
    </Typography>
  );
};

export default Servicesheading;