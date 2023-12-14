import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
import React from "react";
const Container = styled(Box)`
height:45px;
display:flex;
background:#ededed;
width:100%;
align-items:center;
padding: 0 15px;
& > *{
    margin:5px;
    color:#919191;
}
`
const Search = styled(Box)`
background:#fff;
border-radius:12px;
width:calc(94% - 100px)
`
const InputField = styled(InputBase)`
width:100%;
padding:10px 20px;
height:33px;
font-size:14px;
`
const ClipIcon = styled(AttachFile)`
transform: rotate(225deg) scaleY(-1)
`

function Footer(){
    return(
        <Container>
            <EmojiEmotionsOutlined/>
            <ClipIcon/>
            <Search>
                <InputField placeholder="Type a message"/>
            </Search>
            <Mic/>
        </Container>
)
}

export default Footer