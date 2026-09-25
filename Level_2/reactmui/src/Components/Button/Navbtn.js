

import React from "react";
import { Button } from "@mui/material";
import { navbtncss } from "../../Theme/Navbtnstyle";

const Navbtn = (props) => {
  return (
    <Button
    href={props.href}
      sx={(theme) => ({
        ...navbtncss(theme),
        ...props.sx,
      })}
    >
      {props.txt}
    </Button>
  );
};

export default Navbtn;