import React, {useContext} from "react";
import {Box, Dialog, List, ListItem, Typography, styled} from '@mui/material'
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
    height:'96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow:'hidden'
}
const Component = styled(Box)`
    display:flex;
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const QRCode = styled('img')({
    height:264,
    width:264,
    margin: '50px 0 0 50px'
})
const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px
`

const StyledList = styled(List)`
    & > li {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:25px;
        color:#4a4a4a;

    }
`

function LoginDialog(){

    const {setAccount} = useContext(AccountContext)

    const onLoginSuccess = (res)=> {
        const decoded = jwtDecode(res.credential)
        setAccount(decoded)
    }
    const onLoginError = (e)=>{
        console.log('error: ', e)
    }
    
    return(
        <Dialog
        open={true}
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Setting and select Whatsapp Web</ListItem>
                        <ListItem>3. Tap on Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCode src={qrCodeImage} alt="qr"/>
                    <Box style={{position:'absolute', top:'46%', left:'29%'}}>
                        <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}/>
                    </Box>
                </Box>
            </Component>
        </Dialog>
)
}

export default LoginDialog