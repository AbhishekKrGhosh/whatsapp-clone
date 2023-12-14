import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`

const Image = styled('img')({
    height:50,
    width:50,
    borderRadius:'50%',
    margin:'0 14px'
})

function Conversation({user}){
    return(
        <Component>
            <Box>
                <Image src={user.picture} alt="dp"/>
            </Box>
            <Box>
                <Box>
                    <Typography>
                        {user.name}
                    </Typography>
            </Box>
            </Box>
        </Component>
)
}

export default Conversation