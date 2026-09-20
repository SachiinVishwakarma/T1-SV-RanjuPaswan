import theme from "./them";

export const navbarcss = (theme) => ({
  navbar:{
    backgroundColor:theme.palette.primary.main,
    boxShadow:"none",
  },

  toolbar:{
    minHeight:"65px",
    paddingleft:"30px",
    paddingRight:"30px",
    display:"flex",
    justifyContant:"space-between",
  },
   
  navlinks:{
    display:"flax",
    alignitems:"center",
    gap:3,
      marginLeft: "auto",
  },

  logo:{
    color:theme.palette.primary.contrastText,
    fontSize:"28px",
    fontWeight:theme.typography.fontWeightBold,
  },
});