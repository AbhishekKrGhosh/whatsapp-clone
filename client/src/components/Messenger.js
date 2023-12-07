import React from "react";
import {AppBar, Toolbar, styled, Box} from '@mui/material'
import LoginDialog from "./account/LoginDialog";

const Header = styled(AppBar)`
    height:220px;
    background-color: #00a884;
    box-shadow: none;
`
const Component = styled(Box)`
    height:100vh;
    background:#f0f2f5;
`

function Messenger(){
    return(
        <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <LoginDialog/>
        </Component>
)
}

export default Messenger