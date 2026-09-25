import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Servicesbox from "./ServicesBox";
import Subheading from "../About/Subheading";

import { Servicesstyle } from "../../Theme/Servicesstyle";

const Services = () => {
  const theme = useTheme();
  const styles = Servicesstyle(theme);

  return (
    <Box id="included">
      <Subheading txt="What's Included" />

      <Box sx={styles.services}>

        <Stack direction="row" spacing={1} sx={styles.stack}>
          <Servicesbox />
          <Servicesbox />
          <Servicesbox />
        </Stack>

        <Stack direction="row"
         spacing={1} 
         sx={(theme) => Servicesstyle(theme).stack}>
          <Servicesbox />
          <Servicesbox />
          <Servicesbox />
        </Stack>

      </Box>
    </Box>
  );
};

export default Services;