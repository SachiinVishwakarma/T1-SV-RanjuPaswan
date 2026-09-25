import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Subheading from "./Subheading";
import Text from "../Text/Text";
import Aboutinfo from "./Aboutinfo";

import { Aboutstyle } from "../../Theme/Aboutstyle";

const About = () => {
  const theme = useTheme();
  const styles = Aboutstyle(theme);

  return (
    <Box
      id="abouttext"
      sx={styles.about}
    >
       <Subheading
  txt="About This Project"
/>

      <Text
        sx={styles.description}
        txt="This comprehensive template is designed for students and developers to practice modern web
         fundamentals-responsive layouts, accessible forms, client-side state management, and component
          architecture-without any frameworks or complex build process."
      />

      <Stack sx={styles.infoStack}>
        <Aboutinfo />
      </Stack>
    </Box>
  );
};

export default About;