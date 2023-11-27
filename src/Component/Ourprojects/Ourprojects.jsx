import React from "react";
import Contactus from "./../Contactus/Contactus";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./Ourprojects.css";
import '@splidejs/react-splide/css'




const Ourprojects = ({contextname})=>{
    const staticjson = {
        para:"Fusion VR Copyrights © 2023 All Rights Reserved. Designed by Dream Effects Multimedia",
    }
    return(
        <>

<div className="container">
<div className="splide-container mt-5 mb-5">
<Splide aria-label="My Favorite Images"  options={ {
    rewind: true,
    perPage : 3,
    perMove: 1,
    autoplay: true,
    type   : 'loop',
    autoScroll: {
    speed: 1,
  }
  } }>
  
  <SplideSlide>
  <div className="text-center">
  <h3>Project Visualization</h3>
  <p className="text-justify">
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
  <img src="./images/projects-2.webp" alt="Image 1"/>
  </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Promotion Video</h3>
  <p className="text-justify">
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 2"/>
    </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Explainer Video</h3>
  <p>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 3"/>
    </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Logo Animation</h3>
  <p>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 4"/>
    </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Archetect Visualization</h3>
  <p>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 5"/>
    </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Exploring chola</h3>
  <p>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 6"/>
    </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Photography mess processing</h3>
  <p>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 6"/>
    </div>
  </SplideSlide>
  <SplideSlide>
  <div className="text-center">
  <h3>Drown Video solution</h3>
  <p>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
  </p>
    <img src="./images/projects-2.webp" alt="Image 6"/>
    </div>
  </SplideSlide>
</Splide>
</div>
</div>
<div className="footer">
            {staticjson.para}
        </div>





            <h3>Ourprojects</h3>
            <h5>{contextname}</h5>
            {/* <Contactus /> */}
        </>
    )
}

export default Ourprojects;