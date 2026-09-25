import { Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Servicesheading from "./Servicesheading";
import Text from "../Text/Text";

import { Servicesstyle } from "../../Theme/Servicesstyle";

const Servicesbox = () => {
  const theme = useTheme();
  const styles = Servicesstyle(theme);

  return (
    <Card
      elevation={0}
      sx={styles.box}
    >
      <CardContent sx={styles.cardContent}>
        <Servicesheading />

        <Text
          sx={styles.text}
          txt="Beautiful login and signup forms with real- time validation,error
           handling,and seamless localStorage integration."
        />
      </CardContent>
    </Card>
  );
};

export default Servicesbox;