import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Navbtn from "../Button/Navbtn";
import Colorbtn from "../Button/Colorbtn";
import Text from "../Text/Text";

import { Footerstyle } from "../../Theme/Footerstyle";

const Footer = () => {
  const theme = useTheme();
  const styles = Footerstyle(theme);

  return (
    <AppBar
      position="static"
      sx={styles.footer}
    >
      <Container maxWidth={false} sx={{px:2}}>

        <Toolbar
          disableGutters
          sx={styles.toolbar}
        >

          <Text
            txt="© 2023 WebTech Practice. Built for learning and growth."
            sx={styles.text}
          />

         <Stack
            direction="row"
            sx={styles.buttons}
          >

          <Navbtn href="#abouttext" txt="About" />

          <Navbtn  href="included" txt="Services" />

          <Navbtn txt="Theme" />

          <Navbtn txt="Login" />

          <Colorbtn txt="Sign Up" />

        </Stack>

        </Toolbar>

      </Container>
    </AppBar>
  );
};

export default Footer;