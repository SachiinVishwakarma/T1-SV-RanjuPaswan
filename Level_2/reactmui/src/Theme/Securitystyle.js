export const Securitystyle = (theme) => ({
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
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightMedium,

    "@media (max-width: 768px)": {
      left: 0,
    },
  },

  content: {
    marginRight: "70px",
    padding: "30px",
    marginTop: "60px",
    overflowY: "auto",
  },

  security: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.border.main}`,
    borderTop: `3px solid ${theme.palette.border.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: "28px",
    minHeight: "650px",
  },

  heading: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },

  title: {
    marginTop: "30px",
    marginBottom: "20px",
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },

  description: {
    marginBottom: "30px",
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
  },

  inputGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",

    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
    },
    
  },

  fullWidth: {
    gridColumn: "1 / -1",
    width: "100%",
  },

  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "24px",
  },

  clearButton: {
    padding: "10px 20px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: "pointer",
  },

  updateButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius:"10px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },

  divider: {
    borderTop: `1px solid ${theme.palette.border.light}`,
    margin: "35px 0 25px",
  },

  infoTitle: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    marginBottom: "25px",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",

    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    backgroundColor: theme.palette.background.default,
    border: `1.5px solid ${theme.palette.border.light}`,
    borderRadius:"10px" ,
    padding: "20px",
    minHeight: "140px",
  },

  icon: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.primary.main,
    marginBottom: "12px",
  },

  cardTitle: {
    fontSize:theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    marginBottom: "8px",
  },

  cardText: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.secondary,
  },
});