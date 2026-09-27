
export const Overviewstyle = (theme) => ({

  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
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

    "@media (max-width: 768px)": {
      left: 0,
    },
  },

  content: {
    marginRight:"70px",
    padding: "30px",
    marginTop: "60px",
    overflowY: "auto",
  },

  welcomeCard: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.border.main}`,
    borderTop: `3px solid ${theme.palette.border.main}`,
    borderRadius: "12px",
    padding: "28px",
    minHeight: "650px",
  },

  heading: {
    fontSize: "24px",
    fontWeight: 600,
    color: theme.palette.text.primary,
  },

  description: {
    marginTop: "30px",
    marginBottom: "30px",
    fontSize: "17px",
    fontWeight: 500,
    color: theme.palette.text.primary,
  },

  profileSection: {
    marginBottom: "40px",
  },

  sectionTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "20px",
    color: theme.palette.text.primary,
  },

 

  

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginTop: "40px",
    marginBottom: "50px",

    "@media (max-width: 1000px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    backgroundColor: theme.palette.background.default,
    border: `1.5px solid ${theme.palette.border.light}`,
    padding: "16px",
    borderRadius: "10px",
    minHeight: "150px",
    marginTop:"20px",

  display: "flex",
  flexDirection: "column",
  },

  cardTitle: {
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: 600,
    color: theme.palette.text.primary,
  },

  cardText: {
    fontSize: "15px",
    lineHeight: 1.5,
    color: theme.palette.text.secondary,
    marginBottom: "20px",
  },

  progressBar: {
    height: "8px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "8px",
     marginTop: "25px",
  },

  quickTitle: {
    marginBottom: "30px",
    fontSize: "18px",
    fontWeight: 600,
    color: theme.palette.text.primary,
  },

  quickActions: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",

    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },

  actionCard: {
    backgroundColor: theme.palette.background.paper,
    border: `1.5px solid ${theme.palette.border.main}`,
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.background.default,
    },
  },

  actionTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "8px",
    color: theme.palette.text.primary,
  },

  actionText: {
    fontSize: "14px",
    color: theme.palette.text.secondary,
  },
});