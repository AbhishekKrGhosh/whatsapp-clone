import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import {Chat as MessageIcon} from '@mui/icons-material'
import HeaderMenu from "./HeaderMenu";

const Component = styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Wrapper = styled(Box)`
margin-left:auto;
& > * {
    margin-left:2px;
    padding:8px;
    color: #000;
};
& : first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px; 
}
`

const Image = styled('img')({
    height:'40px',
    width:'40px',
    borderRadius: '50%'
})


function Header(){
    const {account} = useContext(AccountContext)
    return(
        <Component>
            <Image src={account.picture} alt="profilePic"/>
            <Wrapper>
                <MessageIcon/>
                <HeaderMenu/>
            </Wrapper>
        </Component>
)
}

export default Header