

export const Inputstyle = (theme) => ({
  label: {
    display: "block",
    fontSize:  theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.primary,
    marginBottom: "7px",
  },

  input: {
    width: "100%",

    "& .MuiOutlinedInput-root": {
      width: "100%",
      backgroundColor: theme.palette.secondary.contrastText,
      borderRadius: "10px",

      "& fieldset": {
        border: "none",
      },

      "&:hover fieldset": {
        border: "none",
      },

      "&.Mui-focused fieldset": {
        border: "none",
      },

      "&.Mui-focused": {
        boxShadow: "none",
      },
    },

    "& .MuiInputBase-input": {
      padding: "12px 14px",
      fontSize:  theme.typography.fontSize,
    },
  },

  fullInput: {
    width: "100%",
  },

  halfInput: {
    width: "100%",
  },
});