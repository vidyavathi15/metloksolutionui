import React from 'react'
import { Stack, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import {w3Image} from "../src/image 5"
import w3Image from "../src/images/image 6.png"
// import innovImg from "../src/images/image 5.png"
 const NavBar = () => {
    return (
        <Stack direction="row" sx={{ backgroundColor: "#1a020f" }} justifyContent="space-between" p={1}>
            <Stack direction="row" alignItems="center" spacing={3}>




                <img src={w3Image} alt="w3Logo" style={{ height: "5rem", width: "15rem" , color:'white'}} />

            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
                <Typography variant='h6' style={{ color: 'white' }}>James Bond</Typography>
                <CircleIcon style={{ color: "grey", height: "3rem", width: "3rem" }} />
                <ArrowDropDownIcon style={{ color: "grey", height: "3rem", width: "3rem" }} />
            </Stack>
        </Stack>
    )
}

export  default NavBar
