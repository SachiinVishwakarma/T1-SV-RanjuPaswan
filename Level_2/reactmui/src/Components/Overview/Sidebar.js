
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

import { Sidebarstyle } from "../../Theme/Sidebarstyle";

const Sidebar = () => {
  const theme = useTheme();
  const styles = Sidebarstyle(theme);

  return (
    <Box component="aside" sx={styles.sidebar}>
      <Box sx={styles.userBox}>
        <Box sx={styles.logo}>
          DU
        </Box>

        <Box>
          <Typography sx={styles.userName}>
            Demo User
          </Typography>

          <Typography sx={styles.userEmail}>
            demo@webtech.parctice
          </Typography>
        </Box>
      </Box>

      <Typography sx={styles.menuSection}>
        DASHBOARD
      </Typography>

      <NavLink
        to="/overview"
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              ...styles.menuItem,
              ...(isActive ? styles.activeItem : {}),
            }}
          >
            Overview
          </Box>
        )}
      </NavLink>

      <NavLink
        to="/profile"
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              ...styles.menuItem,
              ...(isActive ? styles.activeItem : {}),
            }}
          >
            Profile Settings
          </Box>
        )}
      </NavLink>

      <NavLink
        to="/security"
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              ...styles.menuItem,
              ...(isActive ? styles.activeItem : {}),
            }}
          >
            Security
          </Box>
        )}
      </NavLink>

      <NavLink
        to="/notification"
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              ...styles.menuItem,
              ...(isActive ? styles.activeItem : {}),
            }}
          >
            Notification
          </Box>
        )}
      </NavLink>

      <Typography sx={styles.menuSection}>
        QUICK ACTION
      </Typography>

      <NavLink
        to="/help-support"
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              ...styles.menuItem,
              ...(isActive ? styles.activeItem : {}),
            }}
          >
            Help & Support
          </Box>
        )}
      </NavLink>

      <Typography sx={styles.bottom}>
        ACCOUNT
      </Typography>

      <NavLink
        to="/login"
        style={{ textDecoration: "none" }}
      >
        <Box sx={styles.menuItem}>
          Sign out
        </Box>
      </NavLink>
    </Box>
  );
};

export default Sidebar;

