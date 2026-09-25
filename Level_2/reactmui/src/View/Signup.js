

import { useState } from "react";

import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

import Signupinput from "../Components/Signup/Signupinput";
import SignupCheck from "../Components/Signup/SignupCheck";

import { Signupstyle } from "../Theme/Signupstyle";

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

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      terms,
    } = formData;

    let userData =
      JSON.parse(localStorage.getItem("userDetails")) || [];

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please enter all fields.");
      return;
    }

    const nameRegex = /^[A-Za-z]{2,15}$/;
    const emailRegex = /^[^\s@#]+@[^\s@#]+\.[^\s@#]+$/;

    if (!nameRegex.test(firstName)) {
      alert("First Name must contain only letters.");
      return;
    }

    if (!nameRegex.test(lastName)) {
      alert("Last Name must contain only letters.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    userData.push({
      firstName,
      lastName,
      email,
      password,
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
            />

            <Signupinput
              label="Last Name"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
            />
          </Box>

          <Stack
            direction="row"
            sx={styles.row}
            marginTop="18px"
          >
            <Signupinput
              label="Password"
              type="password"
              placeholder="Create new password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <Signupinput
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Stack>

          <Typography sx={styles.hint}>
            Use at least 8 characters, with letters and numbers.
          </Typography>

          <SignupCheck
            checked={formData.terms}
            onChange={handleCheckbox}
          />

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