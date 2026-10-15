import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import HelpIcon from "@mui/icons-material/Help";
import PhoneIcon from "@mui/icons-material/Phone";

import Sidebar from "../Components/Overview/Sidebar";

import { HelpSupportstyle } from "../Theme/HelpSupportstyle";

const HelpSupport = () => {
  const theme = useTheme();
  const styles = HelpSupportstyle(theme);

  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box component="main" sx={styles.main}>
        <Box sx={styles.topbar}>
          WebTech Practice Dashboard
        </Box>

        <Box sx={styles.content}>
          <Box sx={styles.helpCard}>
            <Typography sx={styles.heading}>
              Help & Support
            </Typography>

            <Box sx={styles.header}>
              <HelpIcon sx={styles.icon} />

              <Typography sx={styles.headerText}>
                Frequently Asked Questions
              </Typography>
            </Box>

            <Box sx={styles.box}>
              <Typography sx={styles.boxTitle}>
                How do I update my profile?
              </Typography>

              <Typography sx={styles.boxText}>
                Click on "Profile Settings" in the sidebar to
                edit your personal information, address, and
                other details.
              </Typography>
            </Box>

            <Box sx={styles.box}>
              <Typography sx={styles.boxTitle}>
                Is my data secure?
              </Typography>

              <Typography sx={styles.boxText}>
                This is a demo application that stores data in
                your browser's localStorage. In a production
                application, data would be encrypted and
                stored securely on servers.
              </Typography>
            </Box>

            <Box sx={styles.box}>
              <Typography sx={styles.boxTitle}>
                How do I change my password?
              </Typography>

              <Typography sx={styles.boxText}>
                Go to "Security" in the sidebar. Enter your
                current password, then set and confirm your
                new password.
              </Typography>
            </Box>

            <Box sx={styles.header}>
              <PhoneIcon sx={styles.icon} />

              <Typography sx={styles.headerText}>
                Contact Support
              </Typography>
            </Box>

            <Box sx={styles.contactBox}>
              <Typography sx={styles.contactText}>
                This is a demonstration application for learning
                web development. In a real application, you would
                find contact information and support options here.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HelpSupport;