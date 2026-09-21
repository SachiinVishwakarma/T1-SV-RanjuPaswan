import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Signupinput from "../Components/Signup/Signupinput";
import SignupCheckbox from "../Components/Signup/SignupCheck";
import { Signupstyle } from "../Theme/Signupstyle";

const Signup = () => {
  const theme = useTheme();
  const styles = Signupstyle(theme);

  return (
    <Box sx={styles.page}>
      <Box sx={styles.card}>

        <Typography component="h2" sx={styles.heading}>
          Create your account
        </Typography>

        <Typography sx={styles.subtitle}>
          Sign up to access the practice dashboard.
        </Typography>

        <Box component="form">


          <Stack direction="row" sx={styles.row}>
            <Signupinput
              label="First Name"
              placeholder="Enter First Name"
            />

            <Signupinput
              label="Last Name"
              placeholder="Enter Last Name"
            />
          </Stack>

          <Box sx={styles.formGroup}>
            <Signupinput
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
            />
          </Box>

    
          <Stack direction="row" sx={styles.row}>
            <Signupinput
              label="Password"
              type="password"
              placeholder="Create new password"
            />

            <Signupinput
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
            />
          </Stack>

        
          <Typography sx={styles.hint}>
            Use at least 8 characters, with letters and numbers.
          </Typography>

    
          <SignupCheckbox />

        
          <Button
            type="button"
            variant="contained"
            sx={styles.button}
          >
            Create Account
          </Button>

        </Box>

        <Typography sx={styles.signupText}>
          Already have an account?{" "}
          <Box
            component="a"
            href="/login"
            sx={styles.link}
          >
            Sign in
          </Box>
        </Typography>

      </Box>
    </Box>
  );
};

export default Signup;