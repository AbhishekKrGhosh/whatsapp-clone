import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../../../constants/data";
import { Lock } from "@mui/icons-material";

const Component = styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:100vh;
`
const Container = styled(Box)`
padding : 0 200px;

`

const Image = styled('img')({
    width:400,
    marginTop:100
})

const Title = styled(Typography)`
font-size:32px;
margin: 25px 0 10px 0;
font-family: inherit;
font-weight:300;
color:#41525d;
`
const SubTitle = styled(Typography)`
font-size:14px;
color:#667781`
const EncryptedText = styled(Typography)`
font-size:12px;
color:#8696a0;
margin-top:150px;
`
const LockIcon = styled(Lock)`
font-size:12px;
position:relative;
top:1px;
margin-right:5px;
`


function EmptyChat(){
    return(
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="dp"/>
                <Title>Download WhatsApp for Windows</Title>
                <SubTitle>Make calls, share your screen and get a faster experience when you download the Windows app.</SubTitle>
                <EncryptedText><LockIcon />Your personal messages are end-to-end encrypted</EncryptedText>
            </Container>
        </Component>
)
}

export default EmptyChat