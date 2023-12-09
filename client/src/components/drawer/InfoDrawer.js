import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, Typography, styled } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const drawerStyle={
    height:'95%',
    margin:'17px 20px 22px 20px',
    borderRadius: 0,
    width:'450px',
    maxWidth:'450px',
    maxHeight: '100%',
    overflow:'hidden',
    boxShadow:'none'
}
const Header = styled(Box)`
display:flex;
height:16%;
background:#008069;
color:#fff;
& > svg, & > p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
};
& > p{
    font-size:18px;
}
`
const Component = styled(Box)`
height:84%;
background:#EDEDED;
`

function InfoDrawer({open, setOpen}){
    const handleClose = () => {
        setOpen(false)
    }
    return(
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex:1500}}>
            <Header>
                <ArrowBack onClick={()=>setOpen(false)}/>
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
)
}

export default InfoDrawer