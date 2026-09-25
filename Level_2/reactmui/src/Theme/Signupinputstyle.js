export const Signupinputstyle = (theme) => ({


  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    marginBottom: "6px",
  },
  
  input: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fcfdfe",
      borderRadius: "10px",

      "& fieldset": {
        border: `1.5px solid ${theme.palette.secondary.dark}`,
      },

      "&:hover fieldset": {
        borderColor: theme.palette.secondary.main,
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
        borderWidth: "1.5px",
      },

  
    },

    "& .MuiInputBase-input": {
      padding:"17px 13px",
      fontSize: "14px",
    },

    "& .MuiInputLabel-root": {
      fontSize: "14px",
    },
  },
});