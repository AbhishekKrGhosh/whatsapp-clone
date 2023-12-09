import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import {Menu, MenuItem, styled} from '@mui/material'


const MenuOption = styled(MenuItem)`
font-size:14px;
padding: 10px 60px 5px 24px;
color:#4a4a4a
`

function HeaderMenu({setOpenDrawer}){
    const [open, setOpen] = useState(null)
    const handleClose = () => {
        setOpen(null)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    
    
    return(
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={()=>{
            setOpenDrawer(true)
            handleClose()
        }}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>New Group</MenuOption>
        <MenuOption onClick={handleClose}>Archived</MenuOption>
        <MenuOption onClick={handleClose}>Starred Messages</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Log out</MenuOption>
      </Menu>
        </>
)
}

export default HeaderMenu