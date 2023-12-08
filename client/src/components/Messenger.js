import React,{ useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import {AppBar, Toolbar, styled, Box} from '@mui/material'
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Header = styled(AppBar)`
    height:220px;
    background-color: #00a884;
    box-shadow: none;
`
const Header2 = styled(AppBar)`
    height:125px;
    background-color: #00a783;
    box-shadow: none;
`
const Component = styled(Box)`
    height:100vh;
    background:#f0f2f5;
`

function Messenger(){
    const {account} = useContext(AccountContext)
    return(
        <Component>
            {
                account? <>
                <Header2>
            <Toolbar>

            </Toolbar>
        </Header2>
                <ChatDialog/> 
                </>
                :
            <>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <LoginDialog/>
        </>
            }
        </Component>
)
}

export default Messenger