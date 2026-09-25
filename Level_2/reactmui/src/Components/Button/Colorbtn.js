import { Button } from "@mui/material";
import { btncolorcss } from "../../Theme/btncolorstyle";

const Colorbtn = (props) => {
  return (
    <Button sx={(theme) => btncolorcss(theme)}>
      {props.txt}
    </Button>
  );
};

export default Colorbtn;

