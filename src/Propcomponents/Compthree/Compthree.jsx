import React,{useContext} from "react";
import Createcontextglob from "./../Createcontextglob/Createcontextglob";

const Compthree = ()=>{
    const getvarib = useContext(Createcontextglob);
    console.log(getvarib);
    return(
        <>
            <h3>Compthree {getvarib}</h3>
        </>
    )
}
export default Compthree;