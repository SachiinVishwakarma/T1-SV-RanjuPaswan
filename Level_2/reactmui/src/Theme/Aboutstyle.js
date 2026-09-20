export const Aboutstyle = (theme) => ({
  about: {
    textAlign: "center",
    mt:20,
    mb:18,
    scrollMarginTop:"90px",
  },

  description: {
    maxWidth: "700px",
    display: "flex",
    justifySelf: "center",
    mb: 3,
    mt: 1,
    color: theme.palette.text.secondary,
    
  },

  infoStack: {
    width: "600px",
    maxWidth: "90%",
    mx: "auto",
    
  },

  infoBox: {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    padding: "10px",
  },

  infoText: {
    color: theme.palette.text.secondary,
  },
});

