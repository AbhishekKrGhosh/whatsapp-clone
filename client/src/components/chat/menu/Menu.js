import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Search from "./Search";

function Menu(){
    return(
        <Box>
            <Header/>
            <Search/>
        </Box>
)
}

export default Menu