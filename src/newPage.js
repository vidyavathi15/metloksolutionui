
import React from 'react'
import { Stack, Typography, Button, Box} from '@mui/material'
import ReactPlayer from "react-player"
import  NavBar  from './navbar' 
import { NewPageStyles } from './newPageStyles'
// import { Stepper, Step, StepLabel } from "@material-ui/core";
import {Stepper, Step} from "react-mui-stepper"
import { FooterPage } from './footerPage' 
import innovImg from "../src/images/image 5.png"
import w3Logo from "../src/images/image 7.png"

const NewPage = () => {
    const Styles= NewPageStyles()
  return (
    <Stack>
        <NavBar />
        <Stack className={Styles.w3Container} >
        <Stack>
            <Stack direction="row" spacing={2} alignItems="center">

           
        <img src={ w3Logo } alt="EUSUMMIT" style={{ height: "5rem", width: "5rem" }} />
        <Typography variant="h6"  style={{color:'white'}}>POAP NFT</Typography>
        </Stack>
        <Stack className={Styles.middleContainer} direction="column" pb={5}>
            <Stack direction="column">
            <Typography variant="h6" style={{width:"50%"}}>Entrepreneurship occurs all over the world, but it is a particular characteristic of free-market economies. Countries with the highest rates of entrepreneurship include the United States, Canada, Israel, Italy, and Great Britain. However, countries with developing economies are increasingly turning to grassroots entrepreneurial efforts as a way to create economic opportunities and ensure economic survival. In some low-income or high-unemployment locations, individuals are pushed to adopt entrepreneurship to survive financially. Where no other economic options and jobs are available, some people opt for entrepreneurship, or self-employment, as a means to generate income.</Typography>
            <Box width="100%">
             <Stepper>
        <Step>
          BRONZE
        </Step>
        <Step>
          SILVER
        </Step>
        <Step>
          GOLD
        </Step>
        <Step>
          DIAMOND
        </Step>
      </Stepper> 
      </Box>

         
      </Stack>
        
      
      <img src={innovImg} alt="iinnovation"  style={{height:"30rem", width:"23rem", position:"absolute", top:"2rem", right:"4rem"}}/>

      
      <Stack className={Styles.sessionContainer} >
        <Stack spacing={3} direction="column" p={2}>
            <Typography varinat="h6" style={{color:'white', fontSize:"20px"}}>SESSIONS</Typography>
            <Stack direction="row" classname={Styles.buttonsContainer} spacing={2}>

 
            <Button variant="contained" style={{backgroundColor:"#E30076",}}>DAY1</Button>
            <Button variant="contained" style={{backgroundColor:"#610249"}}>DAY2</Button>
            <Button variant="contained" style={{backgroundColor:"#610249"}}>DAY3</Button>
            </Stack>   
            <Stack className={Styles.videoCardContainer} direction="row" flexWrap={"wrap"} spacing={2}>
              <Stack className={Styles.videoCard} direction="row" alignItems={"center"} spacing={2}>
                {/* <Stack>
                <video controls  style={{width:"12rem", height:"12rem"}} >
                  <source src="https://www.youtube.com/watch?v=6fWU0e6W8QY" type="video/mp4"></source></video>
                  </Stack> */}
                  <ReactPlayer playing controls url="https://www.youtube.com/watch?v=6fWU0e6W8QY"  height="12rem" width="12rem"/>
                  <Stack direction="column" >
                  <Stack direction="column">

                 
                <Typography variant="h6">SESSION 22</Typography>
                <Typography variant="h6">Ajay Dev</Typography>
                <Typography variant="h6">10:30-11:30</Typography>
                <Typography variant="h6">The Techade:5G, Semiconductors,digital services</Typography>
                </Stack>
                <Stack direction="row" justifyContent={"flex-end"}>

              
                <Typography variant="subtitle1">Claim NFT</Typography>
                </Stack>
                </Stack>

              </Stack>
              <Stack className={Styles.videoCard} direction="row" alignItems={"center"} spacing={2}>
                {/* <Stack>
                <video controls  style={{width:"12rem", height:"12rem"}} >
                  <source src="https://www.youtube.com/watch?v=6fWU0e6W8QY" type="video/mp4"></source></video>
                  </Stack> */}
                  <ReactPlayer playing controls url="https://www.youtube.com/watch?v=6fWU0e6W8QY"  height="12rem" width="12rem" borderRadius="8px" />
                  <Stack direction="column" >
                  <Stack direction="column">

                 
                <Typography variant="h6">SESSION 22</Typography>
                <Typography variant="h6">Ajay Dev</Typography>
                <Typography variant="h6">10:30-11:30</Typography>
                <Typography variant="h6">The Techade:5G, Semiconductors,digital services</Typography>
                </Stack>
                <Stack direction="row" justifyContent={"flex-end"}>

              
                <Typography variant="subtitle1">Claim NFT</Typography>
                </Stack>
                </Stack>

              </Stack>
              <Stack className={Styles.videoCard} direction="row" alignItems={"center"} spacing={2}>
                {/* <Stack>
                <video controls  style={{width:"12rem", height:"12rem"}} >
                  <source src="https://www.youtube.com/watch?v=6fWU0e6W8QY" type="video/mp4"></source></video>
                  </Stack> */}
                  <ReactPlayer playing controls url="https://www.youtube.com/watch?v=6fWU0e6W8QY"  height="12rem" width="12rem"/>
                  <Stack direction="column" >
                  <Stack direction="column">

                 
                <Typography variant="h6">SESSION 22</Typography>
                <Typography variant="h6">Ajay Dev</Typography>
                <Typography variant="h6">10:30-11:30</Typography>
                <Typography variant="h6">The Techade:5G, Semiconductors,digital services</Typography>
                </Stack>
                <Stack direction="row" justifyContent={"flex-end"}>

              
                <Typography variant="subtitle1">Claim NFT</Typography>
                </Stack>
                </Stack>

              </Stack>
             
              
              
              
              
              
              
              
              
              
              
              
              
              </Stack>   
            

            
              
              
            </Stack>


      </Stack>
      
      </Stack>
      </Stack>
     

        </Stack>
        <FooterPage />  
       
        </Stack>
  )
}

export default   NewPage