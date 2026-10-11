
import { useState } from "react";

import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Sidebar from "../Components/Overview/Sidebar";
import Input from "../Components/Overview/Input";

import Navbtn from "../Components/Button/Navbtn";
import Colorbtn from "../Components/Button/Colorbtn";

import { Profilestyle } from "../Theme/Profilestyle";

import validation from "../Components/Validation/Validation";
import commonValidation from "../Components/Validation/CommanValidation";

const Profile = () => {
  const theme = useTheme();
  const styles = Profilestyle(theme);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    number: "",
    address: "",
    pin: "",
    city: "",
    country: "",
    git: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",
      dob: "",
      email: "",
      number: "",
      address: "",
      pin: "",
      city: "",
      country: "",
      git: "",
    });
  };

  const handleSave = () => {
      
    const nameError = commonValidation.validateName(
      formData.fullName,
      " Enter the Full Name"
    );
    
      if (nameError) {
      alert(nameError);
      return;
    }
      const emailError = commonValidation.validateEmail(
      formData.email
    );

    if (emailError) {
      alert(emailError);
      return;
    }

    
     const phoneError = validation.validatePhone(
      formData.number
    );

    if (phoneError) {
      alert(phoneError);
      return;
    }
    
     const pinError = validation.validatePin(
      formData.pin
    );

    if (pinError) {
      alert(pinError);
      return;
    }

    const gitError = validation.validateGithub(
      formData.git
    );

    if (gitError) {
      alert(gitError);
      return;
    }

    alert("Profile changes saved successfully!");
  };


  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box component="main" sx={styles.main}>
        <Box sx={styles.topbar}>
          WebTech Practice Dashboard
        </Box>

        <Box sx={styles.content}>
          <Box sx={styles.profile}>
            <Typography sx={styles.heading}>
              Profile Setting
            </Typography>

            <Typography sx={styles.title}>
              Personal Information
            </Typography>

            <Box sx={styles.formGrid}>
              <Input
                label="Full Name"
                name="fullName"
                placeholder="Demo User"
                value={formData.fullName}
                onChange={handleChange}
              />

              <Input
                label="Date of Birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="demo@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Phone Number"
                type="tel"
                name="number"
                placeholder="+91"
                value={formData.number}
                onChange={handleChange}
              />
            </Box>

            <Typography sx={styles.title}>
              Address Information
            </Typography>

            <Box sx={styles.addressGrid}>
              <Box sx={styles.fullWidth}>
                <Input
                  label="Street Address"
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  multiline
                  rows={3}
                />
              </Box>

              <Input
                label="PIN Code"
                type="number"
                name="pin"
                placeholder="123456"
                value={formData.pin}
                onChange={handleChange}
              />

              <Input
                label="City"
                name="city"
                placeholder="Ranchi"
                value={formData.city}
                onChange={handleChange}
              />

              <Input
                label="Country"
                name="country"
                placeholder="India"
                value={formData.country}
                onChange={handleChange}
              />

              <Input
                label="Github Profile"
                name="git"
                placeholder="Enter Github profile"
                value={formData.git}
                onChange={handleChange}
              />
            </Box>

            <Box sx={styles.buttonGroup}>
              <Box sx={styles.buttonGroup}>
  <Navbtn
    type="button"
    onClick={handleCancel}
    txt="Cancel Change"
    sx={styles.cancelButton}
  />

  <Colorbtn
    type="button"
    onClick={handleSave}
    txt="Save Change"
    sx={styles.saveButton}
  />
</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

