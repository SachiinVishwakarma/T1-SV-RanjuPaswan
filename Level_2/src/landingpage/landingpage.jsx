import React,{useState} from "react";
import "./landingpage.css"
import { Box,AppBar,Toolbar, Typography,Button, Stack} from "@mui/material"

 function Landingpage(){
        


const login = () =>{
    window.location.href=''
}

const signup = () =>{
    window.location.href=''
}

 return(

<Box className="landing">
<AppBar position="sticky"


className="navbar">

           <Toolbar className="toolbar">

        <Typography className="logo">
            WebTech Practice
        </Typography>

         <Stack direction={"row"}
         className="nav-links">

        <Button variant="outlined" href="#about"
        className="nav-btn" >
            About
        </Button>

        <Button href="#services"
        variant="outlined"
        className="nav-btn">
            Services
        </Button>
        <Button href="#Theme"
        variant="outlined"
       
        className="nav-btn">
            Theme
        </Button>
        <Button onClick={"Login"}
        variant="outlined"
        
        className="nav-btn">
            Login
        </Button>

        <Button onClick={"Signup"}
        variant="contained"
        
        className="signup-btn">
            Sign Up
        </Button>
        

        </Stack>
    </Toolbar>

</AppBar>


<Box className="hero">

     <Box className="hero-left">

         <Typography className="hero-title">
         Launch your Web Tech practice site in minutes
         </Typography>

         <Typography className="hero-text">
          A clean, modern starter template with Login,
          SignUp, Dashboard, Profile and Logout pages
          using only HTML, CSS, JS and browser localStorage.
          Perfect for learning and practicing web
          development fundamentals.
         </Typography>

          <Stack
             direction="row"
             className="hero-buttons"
                    >

             <Button
             variant="contained"
                onClick={signup}
              className="btn-green"
                 >
                  Sign Up
             </Button>

             <Button
             variant="outlined"
                onClick={login}
                className="btn-white"
                 >
                  I already have an account
            </Button>

                    </Stack>

                </Box>

                

     </Box>
</Box>
);

 }
     

export default Landingpage;