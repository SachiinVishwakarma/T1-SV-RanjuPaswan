
import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";




const LandingPage = () => {
  return (
    <Box>
      <Navbar />

      
        <Hero />
        <About/>
        <Services/>
      

      <Footer/>

      
    </Box>
  );
};

export default LandingPage;
