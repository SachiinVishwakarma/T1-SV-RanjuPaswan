import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Arrowboxstyle } from "../../Theme/Arrowboxstyle";

const Arrowbox = ({ children }) => {
  const theme = useTheme();
  const styles = Arrowboxstyle(theme);

  return (
    <Box sx={styles}>
      {children}
    </Box>
  );
};

export default Arrowbox;