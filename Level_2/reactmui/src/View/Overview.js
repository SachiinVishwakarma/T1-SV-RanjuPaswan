import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";


import Sidebar from "../Components/Overview/Sidebar";


import { Overviewstyle } from "../Theme/Overviewstyle";

const Overview = () => {
  const theme = useTheme();
  const styles = Overviewstyle(theme);

  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box component="main" sx={styles.main}>
        <Box sx={styles.topbar}>
          WebTech Practice Dashboard
        </Box>

        <Box sx={styles.content}>
          <Box sx={styles.welcomeCard}>
            <Typography sx={styles.heading}>
              Welcome back, Demo User
            </Typography>

            <Typography sx={styles.description}>
              Manage your profile settings and account
              preferences. Your data is securely stored in
              your browser's localStorage.
            </Typography>

           
            <Box sx={styles.cardsGrid}>
              <Box sx={styles.card}>
                <Typography sx={styles.cardTitle}>
                  Theme
                </Typography>

                <Typography sx={styles.cardText}>
                  Dark/Light mode preferences across all pages
                </Typography>

                <Box sx={styles.progressBar} />
              </Box>

              <Box sx={styles.card}>
                <Typography sx={styles.cardTitle}>
                  Authentication
                </Typography>

                <Typography sx={styles.cardText}>
                  Secure session stored in browser storage
                </Typography>

                <Box sx={styles.progressBar} />
              </Box>

              <Box sx={styles.card}>
                <Typography sx={styles.cardTitle}>
                  Profile
                </Typography>

                <Typography sx={styles.cardText}>
                  20% completed
                </Typography>

                <Box sx={styles.progressBar} />
              </Box>

              <Box sx={styles.card}>
                <Typography sx={styles.cardTitle}>
                  Security
                </Typography>

                <Typography sx={styles.cardText}>
                  Password protection and account security
                </Typography>

                <Box sx={styles.progressBar} />
              </Box>
            </Box>

            <Typography sx={styles.quickTitle}>
              Quick Actions
            </Typography>

            <Box sx={styles.quickActions}>
              <Box
                sx={styles.actionCard}
              
              >
                <Typography sx={styles.actionTitle}>
                  Edit Profile
                </Typography>

                <Typography sx={styles.actionText}>
                  Update your information
                </Typography>
              </Box>

              <Box
                sx={styles.actionCard}
          
              >
                <Typography sx={styles.actionTitle}>
                  Change Password
                </Typography>

                <Typography sx={styles.actionText}>
                  Update your account security
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;