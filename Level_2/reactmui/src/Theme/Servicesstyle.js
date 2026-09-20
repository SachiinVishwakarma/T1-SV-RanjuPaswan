export const Servicesstyle = (theme) => ({
  services: {
    width:"85%",
    
    margin:"0 auto",
    display: "grid",
    gridTemplateCoumns:{
        xs:"1fr",sm:"1fr 1fr",mb:"1fr 1fr 1fr"
    },
    
    alignItems: "center",
    gap: "30px",
    mb: 10,
  },

  stack: {
    display:"flex",
    justifyContent: "center",
    gap:"25px",
    mb:3,
  },

  box: {
    flex:1,

    minHeight: "180px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "18px",
    backgroundColor: theme.palette.background.paper,
     boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
  
  
  },

  cardContent: {
    p:3
  },
  

  heading: {
    fontSize: "22px",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  
  },

 

  text: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  
  },
});