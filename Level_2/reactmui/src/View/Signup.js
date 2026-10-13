import { useState } from "react";

import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

import Signupinput from "../Components/Signup/Signupinput";
import SignupCheck from "../Components/Signup/SignupCheck";

import { Signupstyle } from "../Theme/Signupstyle";

import validation from "../Components/Validation/Validation";
import commonValidation from "../Components/Validation/CommanValidation";

const Signup = () => {
  const theme = useTheme();
  const styles = Signupstyle(theme);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (event) => {
    setFormData({
      ...formData,
      terms: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // Common validation

    const firstNameError = commonValidation.validateName(
      formData.firstName,
      "First Name"
    );

    if (firstNameError) {
      newErrors.firstName = firstNameError;
    }

    const lastNameError = commonValidation.validateName(
      formData.lastName,
      "Last Name"
    );

    if (lastNameError) {
      newErrors.lastName = lastNameError;
    }

    const emailError = commonValidation.validateEmail(
      formData.email
    );

    if (emailError) {
      newErrors.email = emailError;
    }

    const passwordError = commonValidation.validatePassword(
      formData.password
    );

    if (passwordError) {
      newErrors.password = passwordError;
    }

    const confirmPasswordError =
      commonValidation.validateConfirmPassword(
        formData.password,
        formData.confirmPassword
      );

    if (confirmPasswordError) {
      newErrors.confirmPassword = confirmPasswordError;
    }

    

    const termsError = validation.validateTerms(
      formData.terms
    );

    if (termsError) {
      newErrors.terms = termsError;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const userData =
      JSON.parse(localStorage.getItem("userDetails")) || [];

    userData.push({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    });

    localStorage.setItem(
      "userDetails",
      JSON.stringify(userData)
    );

    alert("Account Created Successfully!");

    navigate("/login");
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.card}>
        <Typography component="h2" sx={styles.heading}>
          Create your account
        </Typography>

        <Typography sx={styles.subtitle}>
          Sign up to access the practice dashboard.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack direction="row" sx={styles.row}>
            <Signupinput
              label="First Name"
              placeholder="Enter First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />

            <Signupinput
              label="Last Name"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
          </Stack>

          <Box sx={styles.formGroup}>
            <Signupinput
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Box>

          <Stack
            direction="row"
            sx={{
              ...styles.row,
              marginTop: "18px",
            }}
          >
            <Signupinput
              label="Password"
              type="password"
              placeholder="Create new password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <Signupinput
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
            />
          </Stack>

          <Typography sx={styles.hint}>
            Use at least 8 characters, with letters and numbers.
          </Typography>

          <SignupCheck
            checked={formData.terms}
            onChange={handleCheckbox}
          />

          {errors.terms && (
            <Typography color="error" fontSize="13px">
              {errors.terms}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            sx={styles.button}
          >
            Create Account
          </Button>
        </Box>

        <Typography sx={styles.signupText}>
          Already have an account?{" "}
          <Box
            component={Link}
            to="/login"
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