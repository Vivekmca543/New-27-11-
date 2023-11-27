import React,{useState} from "react";
import Createcontextglob from "./../Createcontextglob/Createcontextglob";
import Compthree from "./../Compthree/Compthree";
import Compfour from "./../Compfour/Compfour";

const Comptwo =()=>{
    let [values] = useState("Vivekkumar");
    return(
        <>
        <Createcontextglob.Provider value={values}>
        <Compthree />
        </Createcontextglob.Provider>
            <h3>Comp two</h3>
        </>
    )    
}
export default Comptwo;