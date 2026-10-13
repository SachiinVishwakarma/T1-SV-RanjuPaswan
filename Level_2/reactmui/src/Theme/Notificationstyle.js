export const Notificationstyle = (theme) => ({
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

  notification: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderTop: `3.5px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.smallRadius,
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
    marginTop: "15px",
    marginBottom: "15px",
  },

  headerText: {
    fontSize:  theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },

  description: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.primary,
    marginTop: "15px",
    marginBottom: "15px",
  },

  icon: {
    color: theme.palette.secondary.dark,
    fontSize:theme.typography.fontSize,
    flexShrink: 0,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "25px",

    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
    },
  },

  box: {
    backgroundColor:  theme.palette.background.default,
    border: `1.5px solid ${theme.palette.border.light}`,
    padding: "18px",
    borderRadius:theme.shape.cardRadius,
    minHeight: "170px",
  },

  boxTitle: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    marginTop: "12px",
  },

  boxText: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
    marginTop: "15px",
    marginBottom: "15px",
    fontWeight: theme.typography.fontWeightRegular,
  },

  check: {
    margin: 0,

    "& .MuiCheckbox-root": {
      padding: "4px",
      color: theme.palette.secondary.main,
    },

    "& .MuiCheckbox-root.Mui-checked": {
      color: theme.palette.secondary.main,
    },

    "& .MuiFormControlLabel-label": {
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.primary,
    },
  },

  section: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
    marginBottom: "30px",
  },

  sectionText: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  },

  activityBox: {
    backgroundColor:  theme.palette.background.default,
    border: `1.5px solid ${theme.palette.border.light}`,
    padding: "18px",
    borderRadius:theme.shape.cardRadius,
    minHeight: "170px",
  },

  activityItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },

  activityText: {
    display: "flex",
    flexDirection: "column",
  },

  activityTitle: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    marginBottom: "2px",
  },

  activityDescription: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: "10px",
    marginBottom: "10px",
  },

  activityTime: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
  },
});