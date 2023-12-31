import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";
import { GetApp } from "@mui/icons-material";
import { iconPDF } from '../../../constants/data'

const Own = styled(Box)`
background: #dcf8c6;
max-width:60%;
margin-left:auto;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word
`
const Wrapper = styled(Box)`
background: #FFFFFF;
max-width:60%;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word
`
const Text = styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;
`
const Time = styled(Typography)`
margin-top:auto;
color:#919191;
font-size:9px;
word-break:keep-all;
`

function Message({message}){
    const {account} = useContext(AccountContext)
    return(
        <>
        {
            account.sub === message.senderId ? 
                <Own>
                    {
                        message.type === 'file'? <ImageMessage message={message}/> : <TextMessage message={message}/>
                    }
                    
                </Own> 
                :
                <Wrapper>
                    {
                        message.type === 'file'? <ImageMessage message={message}/> : <TextMessage message={message}/>
                    }
                </Wrapper>
        }
        
        </>
)
}
const TextMessage = ({message}) => {
    return(
        <><Text>
        {message.text}
    </Text>
    <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

const ImageMessage = ({message}) => {
    return(
        <Box style={{position:'relative'}}>
            {
                message?.text?.includes('.pdf')?
                <Box>
                    <img src={iconPDF} alt="pdf" style={{width:80}}/>
                    <Typography style={{fontSize:14}}>{message.text.split('file-').pop()}</Typography>
                </Box>
                :
                <img style={{width:300, height:'100%', objectFit:'cover'}} src={message.text} alt={message.text}/>
            }
            <Time style={{position:'absolute', bottom:0, right:0}}>
            <GetApp
            onClick={(e)=>downloadMedia(e, message.text)}
            style={{marginRight:10, border:'1px solid gray', borderRadius:'50%'}}
            fontSize="small"/>
            {formatDate(message.createdAt)}</Time>
            
        </Box>
    )
}

export default Message