

import React, { useState, useEffect } from "react";

import {
  Grid,
  Typography,
  Stack,
  Card,
  Box,
  CardContent,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Colorbtn from "../Button/Colorbtn";
import Navbtn from "../Button/Navbtn";
import Arrowbox from "../Arrow/Arrowbox";
import Dot from "../Dot/Dot";
import Text from "../Text/Text";

import { Herostyle } from "../../Theme/Herostyle";


const sliderData = [
  {
    title: "Complete Auth Flow",
    text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
  },
  {
    title: "Responsive Design",
    text: "Works perfectly on Desktop, Tablet and Mobile devices.",
  },
  {
    title: "HTML CSS Javascript",
    text: "Built using only HTML, CSS and Vanilla Javascript.",
  },
];


const Hero = () => {
  const theme = useTheme();
  const styles = Herostyle(theme);

  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev === sliderData.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return sliderData.length - 1;
      }

      return prev - 1;
    });
  };

  
  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev === sliderData.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };


  return (
    <Grid
      container
      spacing={10}
      sx={styles.grid}
    >


      <Grid size={{ xs: 12, md: 6 }}>

        <Typography sx={styles.heading}>
          Launch your Web Tech
          Practice site in minutes
        </Typography>

        <Text
          sx={styles.description}
          txt="A clean, modern starter template with Login, Signup, Dashboard, Profile and Logout 
          pages using only HTML/CSS/JS and browser localStorage. Perfect for learning and practicing
           web development fundamentals."
        />

        <Stack
          direction="row"
          spacing={2}
          sx={styles.buttonStack}
        >

          <Colorbtn txt="Sign Up" />

          <Navbtn
            txt="I already have an account"
            sx={styles.navbtn}
          />

        </Stack>

      </Grid>


  

      <Grid size={{ xs: 12, md: 6 }}>

        <Card sx={styles.card}>

          <CardContent sx={styles.cardContent}>

            <Box sx={styles.cardBox}>

            

              <Arrowbox>
                <ChevronLeftIcon
                  onClick={prevSlide}
                  sx={styles.arrowIcone }/>
              </Arrowbox>


        

              <Box sx={styles.cardText}>
                <Typography sx={styles.cardHeading}>
                  {sliderData[current].title}
                </Typography>

                <Text
                  sx={styles.cardDescription}
                  txt={sliderData[current].text}
                />
              </Box>


              

              <Arrowbox>
                <ChevronRightIcon
                  onClick={nextSlide}
                  sx={styles.rightArrowIcon}
                />
              </Arrowbox>

            </Box>


          

            <Stack
              direction="row"
              spacing={2}
              sx={styles.dots}
            >

              {sliderData.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrent(index)}
                  sx={{
                    cursor: "pointer",
                    opacity: current === index ? 1 : 0.4,
                  }}
                >
                  <Dot />
                </Box>
              ))}

            </Stack>

          </CardContent>

        </Card>

      </Grid>

    </Grid>
  );
};

export default Hero;