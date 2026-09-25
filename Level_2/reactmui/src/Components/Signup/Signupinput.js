import { TextField,Box,Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Signupinputstyle } from "../../Theme/Signupinputstyle";

const Signupinput = ({ 
  label, 
  type = "text",
   placeholder,
  name,
  value,
  onChange,
 }) => {
  const theme = useTheme();
  const styles = Signupinputstyle(theme);

  return (
    <Box>
      <Typography sx={styles.label}>
        {label}
      </Typography>

      <TextField
        fullWidth
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={styles.input}
      />
    </Box>
    )
};

export default Signupinput;