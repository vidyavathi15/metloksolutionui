import React from 'react'
import { Typography , Stack} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NewPageStyles } from './newPageStyles';

export const FooterPage = () => {
    const Styles= NewPageStyles()
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" style={{backgroundColor:"#232423"}} p={2} className={Styles.footerContainer}>
        
            <Typography variant="h6">@Akshaya NFT| All Rights reserved</Typography>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="h6">Terms & Conditions</Typography>
            <Typography variant="h6">Privacy Policy</Typography>
            <Stack direction="row" alignItems="center">

            
            <Typography variant="h6">Follow Us on</Typography>
            <InstagramIcon htmlColor= "white"/>
            <TwitterIcon  htmlColor= "white"/>
            <FacebookIcon  htmlColor= "white"/>
            <LinkedInIcon  htmlColor= "white"/>
            </Stack>


       
    </Stack>
  )
}
