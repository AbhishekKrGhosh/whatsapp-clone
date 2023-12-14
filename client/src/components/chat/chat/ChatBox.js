import { Box } from "@mui/material";
import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

function ChatBox(){
    return(
        <Box>
            <ChatHeader/>
            <Messages/>
        </Box>
)
}

export default ChatBox