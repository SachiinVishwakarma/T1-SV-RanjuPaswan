export const HelpSupportstyle = (theme) => ({
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    fontFamily: theme.typography.fontFamily,
  },

  main: {
    flex: 1,
    minHeight: "100vh",

    "@media (max-width: 768px)": {
      marginLeft: 0,
    },
  },

  topbar: {
    position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: "18px 30px 18px 280px",
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
    padding: "30px",
    marginTop: "60px",
    marginRight: "70px",
    overflowY: "auto",
  },

  helpCard: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderTop: `3.5px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.smallRadius ,
    padding: "28px",
    minHeight: "700px",

    boxShadow: "0px 5px 13px rgba(1, 1, 1, 0.15)",
  },

  heading: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    marginBottom: "20px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "20px",
    marginBottom: "15px",
  },

  icon: {
    color: theme.palette.secondary.dark,
    fontSize: theme.typography.fontSize ,
    flexShrink: 0,
  },

  headerText: {
    fontSize: theme.typography.fontSize ,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },

  box: {
    backgroundColor:theme.palette.secondary.contrastText,
    border: `2px solid ${theme.palette.border.light}`,
    padding: "12px 14px",
    borderRadius:theme.shape.cardRadius,
    marginBottom: "12px",
  },

  boxTitle: {
    fontSize: theme.typography.fontSize ,
    color: theme.palette.text.primary,
    marginTop: "10px",
    fontWeight: theme.typography.fontWeightMedium,
  },

  boxText: {
    fontSize: theme.typography.fontSize ,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: "15px",
    lineHeight: 1.5,
    marginBottom: "10px",
  },

  contactBox: {
    backgroundColor: theme.palette.background.paper,
    border: `1.5px solid ${theme.palette.border.light}`,
    borderRadius:theme.shape.cardRadius,
    padding: "15px",
  },

  contactText: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    lineHeight: 1.5,
    margin: 0,
  },
});