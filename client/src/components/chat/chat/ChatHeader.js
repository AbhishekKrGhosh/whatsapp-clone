import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { defaultProfilePicture } from "../../../constants/data";

const Header = styled(Box)`
height:44px;
background:#ededed;
padding: 8px 16px;
display:flex;
align-items:center;
`
const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    margin: '0 25px 0 2px'
})

const Status = styled(Typography)`
font-size:12px;
color: rgb(0,0,0,0.6)`

const RightContainer = styled(Box)`
margin-left:auto;
& > svg {
    padding: 8px;
    font-size:24px;
    color: #000;
}
`

function ChatHeader(){
    return(
        <Header>
            <Image src={defaultProfilePicture} alt="dp"/>
            <Box>
                <Typography>Name</Typography>
                <Status>Online Status</Status>
            </Box>
            <RightContainer>
                <Search/>
                <MoreVert/>
            </RightContainer>
        </Header>
)
}

export default ChatHeader