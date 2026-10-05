import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Sidebar from "../Components/Overview/Sidebar";
import Input from "../Components/Overview/Input";

import { Securitystyle } from "../Theme/Securitystyle";

const Security = () => {
  const theme = useTheme();
  const styles = Securitystyle(theme);

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
              />

              <Input
                label="New Password"
                type="password"
                name="newPassword"
                placeholder="Minimum 8 characters"
              />
<Box sx={styles.fullWidth}>
              <Input
                label="Confirm New Password"
                type="password"
                name="confirmPassword"
                placeholder="Re-enter new password"
              />

              </Box>
            </Box>

            <Box sx={styles.buttonBox}>
              <Box component="button" sx={styles.clearButton}>
                Clear
              </Box>

              <Box component="button" sx={styles.updateButton}>
                Update Password
              </Box>
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
                  8/31/2025
                </Typography>
              </Box>

              <Box sx={styles.card}>
                <CalendarMonthIcon sx={styles.icon} />

                <Typography sx={styles.cardTitle}>
                  Last Update
                </Typography>

                <Typography sx={styles.cardText}>
                  Never Updated
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