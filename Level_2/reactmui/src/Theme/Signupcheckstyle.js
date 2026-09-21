export const Signupcheckstyle = (theme) => ({
  checkbox: {
    color: theme.palette.secondary.dark,

    "&.Mui-checked": {
      color: theme.palette.secondary.dark,
    },
  },

  label: {
    margin: "15px 0",

    "& .MuiFormControlLabel-label": {
      fontSize: "12px",
      color: "#777777",
    },
  },
});