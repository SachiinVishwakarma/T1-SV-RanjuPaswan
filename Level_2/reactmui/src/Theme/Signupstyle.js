export const Signupstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },

  card: {
    width: "500px",
    maxWidth: "500px",
    padding: "32px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "16px",
    borderTop: `4px solid ${theme.palette.secondary.main}`,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  },

  heading: {
    fontSize: "20px",
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: "8px",
    color: theme.palette.text.primary,
  },

  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: "13px",
    marginBottom: "12px",
  },

  row: {
    display: "flex",
    gap: "12px",
    marginBottom: "15px",

    "& > *": {
      flex: 1,
      minWidth: 0,
    },
  },

  formGroup: {
    marginBottom: "12px",
  },

  hint: {
    fontSize: "14px",
    color: theme.palette.text.primary,
    textAlign: "left",
    marginRight: "40px",
  },

  button: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "12px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: "4px",
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },

  signupText: {
    marginTop: "20px",
    textAlign: "left",
    fontSize: "14px",
    color: theme.palette.text.primary,
  },

  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontWeight: theme.typography.fontWeightMedium,

    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },

});