

export const navbtncss = (theme) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.info.main}`,
  borderRadius: "15px",
  fontSize: "16px",
  fontWeight: theme. fontWeightRegular,
  textTransform: "none",
  padding: "7px 16px",
  minWidth: "auto",
  marginRight:"18px",

  "&:hover": {
    backgroundColor: "rgba(59, 130, 246, 0.12)",
  },
});