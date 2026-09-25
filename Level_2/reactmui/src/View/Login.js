
import { useState } from "react";

import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

import Signupinput from "../Components/Signup/Signupinput";
import SignupCheck from "../Components/Signup/SignupCheck";

import { Loginstyle } from "../Theme/loginstyle";

const Login = () => {
  const theme = useTheme();
  const styles = Loginstyle(theme);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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
      remember: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;

    if (email === "" || password === "") {
      alert("Please enter all fields.");
      return;
    }

    const emailRegex = /^[^\s@#]+@[^\s@#]+\.[^\s@#]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    const userData =
      JSON.parse(localStorage.getItem("userDetails")) || [];

    const user = userData.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    alert("Login Successful!");

    navigate("/");
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.card}>
        <Typography component="h2" sx={styles.heading}>
          Welcome Back
        </Typography>

        <Typography sx={styles.subtitle}>
          Sign in to continue to your dashboard
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={styles.group}>
            <Signupinput
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>

          <Box sx={styles.group}>
            <Signupinput
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Box>

          <Typography sx={styles.hint}>
            Password must be at least 8 characters long.
          </Typography>

          <Box sx={styles.remember}>
            <SignupCheck
              checked={formData.remember}
              onChange={handleCheckbox}
              label="Remember me for 30 days"
            />

            <Box
              component="a"
              href="#"
              sx={styles.forget}
            >
              Forgot Password
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={styles.button}
          >
            Sign In
          </Button>
        </Box>

        <Typography sx={styles.footerText}>
          New to WebTech Practice?{" "}
          <Box
            component={Link}
            to="/signup"
            sx={styles.link}
          >
            Create an account
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;