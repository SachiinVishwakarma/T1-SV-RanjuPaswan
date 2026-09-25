
export const Loginstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f6f9",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    padding: "32px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "16px",
    borderTop: `5px solid ${theme.palette.secondary.main}`,
  },

  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    marginBottom: "8px",
  },

  subtitle: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "14px",
    marginBottom: "24px",
  },

  group: {
    width: "100%",
    marginBottom: "18px",
  },

  label: {
    display: "block",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    marginBottom: "6px",
  },

  input: {
    width: "100%",

    "& .MuiOutlinedInput-root": {
      width: "100%",
      backgroundColor: "#f8fffe",
      borderRadius: "10px",

      "& fieldset": {
        border: `1.5px solid ${theme.palette.secondary.dark}`,
      },





    },

    "& .MuiInputBase-input": {
      padding: "17px 13px",
      fontSize: "14px",
    },
  },

  hint: {
    fontSize: "12px",
    color: theme.palette.text.secondary,
    marginTop: "-8px",
    marginBottom: "12px",
    textAlign: "left",
  },

  remember: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },

  rememberLabel: {
    margin: 0,

    "& .MuiFormControlLabel-label": {
      fontSize: "12px",
      color: theme.palette.text.secondary,
    },
  },

  checkbox: {
    color: theme.palette.secondary.dark,

    "&.Mui-checked": {
      color: theme.palette.secondary.dark,
    },
  },

  forget: {
    color: theme.palette.secondary.dark,
    textDecoration: "none",
    fontSize: "12px",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  button: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "none",
  },

  footerText: {
    textAlign: "center",
    fontSize: "13px",
    marginTop: "20px",
    color: theme.palette.text.secondary,
  },

  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontWeight: theme.typography.fontWeightMedium,

    "&:hover": {
      textDecoration: "underline",
    },
  },
});