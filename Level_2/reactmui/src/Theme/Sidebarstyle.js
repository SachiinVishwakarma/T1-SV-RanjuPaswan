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
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    flexShrink: 0,
  },

  userName: {
    fontSize: "17px",
    fontWeight: 700,
    width: "15ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  userEmail: {
    fontSize: "11px",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    marginTop: "3px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  menuSection: {
    fontSize: "17px",
    color: theme.palette.text.primary,
    padding: "20px 20px 8px",
    fontWeight: 500,
  },

  menuItem: {
    padding: "10px 20px",
    fontSize: "15px",
    color: theme.palette.text.primary,
    cursor: "pointer",
    borderLeft: "3px solid transparent",
    fontWeight: 500,
    marginLeft: "20px",
    marginRight: "10px",
    borderRadius: "4px",

    "&:hover": {
      backgroundColor: "#f8fafc",
    },
  },

  activeItem: {
    backgroundColor: "#f0fdfd",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderLeft: `3px solid ${theme.palette.secondary.main}`,
    borderRadius: "15px",
  },

  bottom: {
    marginTop: "auto",
    padding: "20px 20px 8px",
    fontSize: "17px",
    fontWeight: 500,
  },
});