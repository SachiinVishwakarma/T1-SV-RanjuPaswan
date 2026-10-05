
export const Profilestyle = (theme) => ({
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    fontFamily: theme.typography.fontFamily,
  },

  main: {
    flex: 1,
    marginLeft: "250px",
    minHeight: "100vh",

    "@media (max-width: 768px)": {
      marginLeft: 0,
    },
  },

  topbar: {
    position: "fixed",
    top: 0,
    left: "250px",
    right: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "18px 30px",
    display: "flex",
    alignItems: "center",
    zIndex: 5,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,

    "@media (max-width: 768px)": {
      left: 0,
    },
  },

  content: {
    padding: "30px",
    marginTop: "60px",
    marginRight:"70px",
    overflowY: "auto",
  },

  profile: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.border.main}`,
    borderTop: `3px solid ${theme.palette.border.main}`,
    borderRadius: `${theme.shape.borderRadius + 4}px`,
    padding: "28px",
    minHeight: "900px",
  },

  heading: {
    marginLeft: "30px",
    marginTop: "10px",
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  },

  title: {
    margin: "30px",
    fontSize:  theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    margin: "0 30px",

    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
    },
  },

  addressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    margin: "0 30px",

    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
    },
  },

  fullWidth: {
    gridColumn: "span 2",
     width: "100%",

    
    
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "24px",
    marginRight: "30px",
  },

  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#d7d7d7",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,

    "&:hover": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.primary.contrastText,
    },
  },

  saveButton: {
    padding: "10px 20px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: `${theme.shape.borderRadius}px`,
    fontWeight: theme.typography.fontWeightMedium,

    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
});

