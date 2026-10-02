import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Inputstyle } from "../../Theme/Inputstyle";

const Input = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  width = "full",
  multiline = false,
   rows = 1,
}) => {
  const theme = useTheme();
  const styles = Inputstyle(theme);

  return (
    <Box
      sx={
        width === "half"?
         styles.halfInput
          : styles.fullInput
      }
    >
      <Typography sx={styles.label}>
        {label}
      </Typography>

      <TextField
        fullWidth
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        multiline={multiline} 
        rows={multiline ? rows : undefined}
        sx={styles.input}
      />
    </Box>
  );
};

export default Input;