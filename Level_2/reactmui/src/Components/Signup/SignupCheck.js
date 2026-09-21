import { FormControlLabel, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Signupcheckstyle } from "../../Theme/Signupcheckstyle";

const SignupCheckbox = () => {
  const theme = useTheme();
  const styles = Signupcheckstyle(theme);

  return (
    <FormControlLabel
      control={<Checkbox sx={styles.checkbox} />}
      label="I agree to the terms"
      sx={styles.label}
    />
  );
};

export default SignupCheckbox;