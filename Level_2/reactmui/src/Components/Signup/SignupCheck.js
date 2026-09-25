import { FormControlLabel, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Signupcheckstyle } from "../../Theme/Signupcheckstyle";

const SignupCheckbox = ({ 
  checked,
  onChange,
  label = "I agree to the terms ",}) => {
  const theme = useTheme();
  const styles = Signupcheckstyle(theme);

  return (
    <FormControlLabel
      control={
      <Checkbox
            checked={checked}
          onChange={onChange}
         sx={styles.checkbox}
          />
        }
    
       label={label}
      sx={styles.label}
    />
  );
};

export default SignupCheckbox;