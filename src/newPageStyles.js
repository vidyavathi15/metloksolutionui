

import { makeStyles } from "@mui/styles";
export const NewPageStyles = makeStyles({


popMainContainer:{
    
    
    
},
sessionContainer:{
    // background: 'linear-gradient(144.99deg, rgba(227, 0, 118, 0.18) -1.79%, rgba(227, 0, 118, 0) 52.06%, rgba(227, 0, 118, 0) 100%)',
    "& .MuiTypography-subtitle2":{
        color:"white"
    }


},
footerContainer:{
    "& .MuiTypography-h6":{
        color:"white"

    }

},
middleContainer:{
    background:`linear-gradient(to  bottom , #f50a8f , #060530)`,
    // background: 'linear-gradient(144.99deg, rgba(227, 0, 118, 0.18) -1.79%, rgba(227, 0, 118, 0) 52.06%, rgba(227, 0, 118, 0) 100%)',
    // backgroundImage: linearGradient('to bottom',"red", "#060530" ),
    height:"370px",
    
    zIndex:0,
    padding:"2rem",
    // height:"100vh",
    
    "& .MuiTypography-h6":{
        color:"white"
    }
    
   
},
buttonsContainer:{
    "& .MuiButton-contained":{
        marginRight:"2rem"
    }
},
videoCard:{
    backgroundColor:"#13262b",
    borderRadius:"8px",
    padding:"1rem",
    height:"15rem", 
    width:"25rem", 
    "& .MuiTypography-h6":{
        color:"white"
    },
    "& .MuiTypography-subtitle1":{
        color:"blue"
    }
}
,
w3Container:{
    paddingTop:"2rem",
    
    position:"relative",
    zIndex:-1, 
    backgroundColor:"#060530",
    height:"100vh"
}









})