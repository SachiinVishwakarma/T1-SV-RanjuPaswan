export const Sidebarstyle = (theme) => ({
  sidebar: {
    width: "250px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    display: "flex",
    flexDirection: "column",
    zIndex: 10,

    "@media (max-width: 768px)": {
      display: "none",
    },
  },

  userBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "20px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },

  logo: {
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: `${theme.shape.borderRadius}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightBold,
    flexShrink: 0,
  },

  userName: {
    fontSize: `${theme.typography.fontSize + 1}px`,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    width: "15ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  userEmail: {
    fontSize: `${theme.typography.fontSize - 5}px`,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
    marginTop: "3px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  menuSection: {
    fontSize: `${theme.typography.fontSize + 1}px`,
    color: theme.palette.text.primary,
    padding: "20px 20px 8px",
    fontWeight: theme.typography.fontWeightMedium,
  },

  menuItem: {
    padding: "10px 20px",
    fontSize: `${theme.typography.fontSize - 1}px`,
    color: theme.palette.text.primary,
    cursor: "pointer",
    borderLeft: "3px solid transparent",
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: "20px",
    marginRight: "10px",
    borderRadius: `${theme.shape.borderRadius / 2}px`,

    "&:hover": {
      backgroundColor: theme.palette.background.default,
    },
  },

  activeItem: {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderLeft: `3px solid ${theme.palette.secondary.main}`,
    borderRadius: `${theme.shape.borderRadius + 7}px`,
  },

  bottom: {
    marginTop: "auto",
    padding: "20px 20px 8px",
    fontSize: `${theme.typography.fontSize + 1}px`,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },
});