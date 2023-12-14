import React, {useEffect, useState} from "react";
import { getUsers } from "../../../service/api";

function Conversations(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            let response = await getUsers
            setData(response)
        }
        fetchData()
    },[])
    return(
        <div>
            Conversations
        </div>
)
}

export default Conversations