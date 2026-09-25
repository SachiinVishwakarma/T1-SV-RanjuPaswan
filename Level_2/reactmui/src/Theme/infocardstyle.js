export const infocardstyle = (theme) => ({
  card: {
    width: "100%",
    minHeight: "180px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "18px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    padding: "25px",
  },

  title: {
    fontSize: "21px",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    marginBottom: "12px",
  },

  description: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
  },
});