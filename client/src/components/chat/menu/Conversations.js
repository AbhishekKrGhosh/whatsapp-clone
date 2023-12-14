import React, {useEffect, useState, useContext} from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height:81vh;
    overflow:overlay;
`


function Conversations(){
    const [users, setUsers] = useState([])
    const {account} = useContext(AccountContext)
    useEffect(()=>{
        const fetchData = async () => {
            let response = await getUsers()
            setUsers(response)
            console.log(users)
        }
        fetchData()
    },[])
    return(
        <Component>
            {
                users.map((user)=>(
                    user.sub != account.sub &&
                    <>
                    <Conversation user={user}/>
                    <Divider variant="inset"/>
                    </>
                ))
            }
        </Component>
)
}

export default Conversations