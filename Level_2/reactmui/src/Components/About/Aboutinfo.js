import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Text from "../Text/Text";

import { Aboutstyle } from "../../Theme/Aboutstyle";

const Aboutinfo = () => {
  const theme = useTheme();
  const styles = Aboutstyle(theme);

  const info = [
    "Single-file pages you can open directly in any modern browser",
    "Single-file pages you can open directly in any modern browser",
    "Single-file pages you can open directly in any modern browser",
    "Single-file pages you can open directly in any modern browser",
    "Single-file pages you can open directly in any modern browser",
    "Single-file pages you can open directly in any modern browser",
    
  ];

  return (
    <Stack sx={styles.infoStack} spacing={2}>
      {info.map((text, index) => (
        <Box key={index} sx={styles.infoBox}>
          <Text sx={styles.infoText} txt={text} />
        </Box>
      ))}
    </Stack>
  );
};

export default Aboutinfo;