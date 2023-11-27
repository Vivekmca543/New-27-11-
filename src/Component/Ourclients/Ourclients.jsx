import React,{useState,createContext,useContext} from "react";
import Upcomingventures from "./../Upcomingventures/Upcomingventures";
const UserContext = createContext();
const Ourclients = ()=>{
   const [username,setUsername] = useState("VivekkumarSubramaniam");
    return(
        <>

            <h3>OurClients</h3>

            {/* <UserContext.Provider value={username}>
                <h4>User Contect Value: {username}</h4>
                <Upcomingventures />
            </UserContext.Provider> */}
        </>
    )
}
export default Ourclients;