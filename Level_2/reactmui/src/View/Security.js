

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Sidebar from "../Components/Overview/Sidebar";
import Input from "../Components/Overview/Input";
import Navbtn from "../Components/Button/Navbtn";
import Colorbtn from "../Components/Button/Colorbtn";

import { Securitystyle } from "../Theme/Securitystyle";
import commonValidation from "../Components/Validation/CommanValidation";

const Security = () => {
  const theme = useTheme();
  const styles = Securitystyle(theme);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [lastUpdate, setLastUpdate] = useState(() => {
    const user = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );

    return user?.lastUpdate || "Never Updated";
  });

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFields = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleUpdatePassword = () => {
    const user = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );

    if (!user) {
      alert("Please login first.");
      return;
    }

    if (!user.password) {
      alert(
        "Current password is not available. "
      );
      
      return;
    }

    const requiredError =
      commonValidation.validateRequired(
        formData.currentPassword
      ) ||
      commonValidation.validateRequired(
        formData.newPassword
      ) ||
      commonValidation.validateRequired(
        formData.confirmPassword
      );

    if (requiredError) {
      alert("Please fill all fields.");
      return;
    }

    const currentError =
      commonValidation.validateCurrentPassword(
        formData.currentPassword,
        user.password
      );

    if (currentError) {
      alert("Current password is not valid.");
      return;
    }

    const passwordError =
      commonValidation.validateNewPassword(
        formData.newPassword
      );

    if (passwordError) {
      alert("Password must be at least 8 characters.");
      return;
    }

    const confirmError =
      commonValidation.validateConfirmPassword(
        formData.newPassword,
        formData.confirmPassword
      );

    if (confirmError) {
      alert("Passwords do not match.");
      return;
    }

    const samePasswordError =
      commonValidation.validateSamePassword(
        formData.newPassword,
        formData.currentPassword
      );

    if (samePasswordError) {
      alert("New password cannot be the same as the current password.");
      return;
    }

    const updatedAt = new Date().toLocaleString();

    const updatedUser = {
      ...user,
      password: formData.newPassword,
      lastUpdate: updatedAt,
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    const users = JSON.parse(
      localStorage.getItem("userDetails") || "[]"
    );

    const userIndex = users.findIndex(
      (item) => item.email === user.email
    );

    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        password: formData.newPassword,
        lastUpdate: updatedAt,
      };

      localStorage.setItem(
        "userDetails",
        JSON.stringify(users)
      );
    }

    setLastUpdate(updatedAt);
    clearFields();

    alert("Password Updated Successfully!");
  };

  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box component="main" sx={styles.main}>
        <Box sx={styles.topbar}>
          WebTech Practice Dashboard
        </Box>

        <Box sx={styles.content}>
          <Box sx={styles.security}>
            <Typography sx={styles.heading}>
              Security Settings
            </Typography>

            <Typography sx={styles.title}>
              Security Settings
            </Typography>

            <Typography sx={styles.description}>
              Keep your account secure by using a strong password
              and changing it regularly.
            </Typography>

            <Box sx={styles.inputGrid}>
              <Input
                label="Current Password"
                type="password"
                name="currentPassword"
                placeholder="Enter current password"
                value={formData.currentPassword}
                onChange={handleChange}
              />

              <Input
                label="New Password"
                type="password"
                name="newPassword"
                placeholder="Minimum 8 characters"
                value={formData.newPassword}
                onChange={handleChange}
              />

              <Box sx={styles.fullWidth}>
                <Input
                  label="Confirm New Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <Box sx={styles.buttonBox}>
              <Navbtn
                type="button"
                txt="Clear"
                sx={styles.clearButton}
                onClick={clearFields}
              />

              <Colorbtn
                type="button"
                txt="Update Password"
                sx={styles.updateButton}
                onClick={handleUpdatePassword}
              />
            </Box>

            <Box sx={styles.divider} />

            <Typography sx={styles.infoTitle}>
              Security Information
            </Typography>

            <Box sx={styles.infoGrid}>
              <Box sx={styles.card}>
                <CalendarMonthIcon sx={styles.icon} />

                <Typography sx={styles.cardTitle}>
                  Account Created
                </Typography>

                <Typography sx={styles.cardText}>
                  {currentUser?.createdDate || "8/31/2025"}
                </Typography>
              </Box>

              <Box sx={styles.card}>
                <CalendarMonthIcon sx={styles.icon} />

                <Typography sx={styles.cardTitle}>
                  Last Update
                </Typography>

                <Typography sx={styles.cardText}>
                  {lastUpdate}
                </Typography>
              </Box>

              <Box sx={styles.card}>
                <CalendarMonthIcon sx={styles.icon} />

                <Typography sx={styles.cardTitle}>
                  Session
                </Typography>

                <Typography sx={styles.cardText}>
                  Current browser
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Security;

