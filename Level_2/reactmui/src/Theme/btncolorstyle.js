export const btncolorcss = (theme) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  fontSize: theme.typography.fontSize,
  minWidth: "auto",
  fontWeight: theme.typography.fontWeightRegular,
  textTransform: "none",
  padding:"8px 18px",
  borderRadius:"15px",

  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
});