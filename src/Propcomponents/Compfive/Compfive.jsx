import React from "react";

const Comfive =React.memo(({name})=>{
    console.log(`${name} component re-render`);
    return(
        <>
            <h3>{name}</h3>
        </>
    )
})
export default Comfive;