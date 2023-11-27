import React from "react";
import "./Home.css";
const Home = ()=>{
    const staticjson = {
        para:"Fusion VR Copyrights © 2023 All Rights Reserved. Designed by Dream Effects Multimedia",
    }
    return(
        <>
           <div className="video-container">
            <video autoplay="autoplay" muted="muted" loop="loop">
                <source src="./acadamy.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="footer">
            {staticjson.para}
        </div>
        </>
    )
}
export default Home;