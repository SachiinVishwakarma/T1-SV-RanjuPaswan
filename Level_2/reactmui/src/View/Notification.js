import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AssignmentIcon from "@mui/icons-material/Assignment";

import Sidebar from "../Components/Overview/Sidebar";

import { Notificationstyle } from "../Theme/Notificationstyle";

const Notification = () => {
  const theme = useTheme();
  const styles = Notificationstyle(theme);

  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box component="main" sx={styles.main}>
        <Box sx={styles.topbar}>
          WebTech Practice Dashboard
        </Box>

        <Box sx={styles.content}>
          <Box sx={styles.notification}>
            <Typography sx={styles.heading}>
              Notification
            </Typography>

            <Box sx={styles.header}>
              <NotificationsIcon sx={styles.icon} />

              <Typography sx={styles.headerText}>
                Notification Preferences
              </Typography>
            </Box>

            <Typography sx={styles.description}>
              Manage how and when you receive notification
              about your account activity.
            </Typography>

            <Box sx={styles.grid}>
              <Box sx={styles.box}>
                <EmailIcon sx={styles.icon} />

                <Typography sx={styles.boxTitle}>
                  Email Notifications
                </Typography>

                <Typography sx={styles.boxText}>
                  Receive important updates via email
                </Typography>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Enable email notification"
                  sx={styles.check}
                />
              </Box>

              <Box sx={styles.box}>
                <LockIcon sx={styles.icon} />

                <Typography sx={styles.boxTitle}>
                  Security Alert
                </Typography>

                <Typography sx={styles.boxText}>
                  Get notified about security change
                </Typography>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Enable security alerts"
                  sx={styles.check}
                />
              </Box>
            </Box>

            <Box sx={styles.section}>
              <AssignmentIcon sx={styles.icon} />

              <Typography sx={styles.sectionText}>
                Recent Activity
              </Typography>
            </Box>

            <Box sx={styles.activityBox}>
              <Box sx={styles.activityItem}>
                <Checkbox
                  checked
                  disabled
                />

                <Box sx={styles.activityText}>
                  <Typography sx={styles.activityTitle}>
                    Profile Updated
                  </Typography>

                  <Typography sx={styles.activityDescription}>
                    Your profile information was successfully
                    updated
                  </Typography>

                  <Typography sx={styles.activityTime}>
                    Today
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Notification;