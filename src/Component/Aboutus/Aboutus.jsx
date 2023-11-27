import React,{useState, useEffect} from "react";
import Ourprojects from "./../Ourprojects/Ourprojects";
import "./Aboutus.css";
const AboutUs = ()=>{

//USE STATE
    const [color,setColor] = useState("red");
    // multiple state Hooks
    const [model,setModel] = useState("mustang");
    const [year,setYear] = useState("1964");
    const [colortwo,setColortwo]=useState("red");
    const [brand,setBrand] =useState("Ford");

    //passing object in state:
    const [carone,setCarone] = useState({
        brand:"Toyota",
        year:"2023",
        model:"Glanza",
        color:"white"
    });

//USEEFFECT
// No dependencies:
        const [count,setCount] = useState(0);
        useEffect(()=>{
            setTimeout(()=>{
                setCount(count+1);
            },1000);
        });

 // empty array:
        // useEffect(()=>{
        //     //Runs on the firstrender
        //     //Runs on anytime any dependencies
        // },[prop,state]);
const [counttwo,setCounttwo] = useState(0);
const [calculation,setCalculation] = useState(1);
useEffect(()=>{
    setCalculation(calculation * 2);
},[counttwo]);

//clear timer:

const [timer,setTimer] = useState(1);
useEffect(()=>{
    let timercount = setTimeout(()=>{
        setTimer(timer=>timer+1);
    },1000);
    return ()=>clearTimeout(timercount);
},[]);

//UseContext:

    const [contextname,setContextname] = useState("VivekkumarSubramaniam"); 
    const staticjson = {
        h4content: "Fusion VR - AR, VR and MR Company in India",
        para:"Fusion VR is India’s leading Customer Focused VR, AR and Industry 4.0 solutions company that is focused on helping businesses in their Digital-Transformation journeys. We handhold companies deploying the Industry 4.0 suite of Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR) and Digital Twins (DT) technologies. We are also one of India’s leading VR / AR companies actively supporting the development and implementation of these technologies in the industrial sectors. We also engage with various stakeholders to help unlock the potential of the Immersive Metaverse.",
    }
    const staticjson2 = {
        para:"Fusion VR Copyrights © 2023 All Rights Reserved. Designed by Dream Effects Multimedia",
    }
    return (
        <>


<div className="content-main">
            <div className="left-content">
            <h4>{staticjson.h4content}</h4>
            <p>{staticjson.para}</p>
            </div>
            <div className="right-content">
                <img src="./images/company-profile.webp" />
        </div>
        </div>


        <div className="footer mt-4">
            {staticjson2.para}
        </div>

















            <h3>UseState :</h3>
            {/* single color */}
            <h3>Color: {color}</h3>
            <button type="button" onClick={()=>setColor("blue")}>Change color</button>
            <br/><br/>
            <p>Multiple state Hooks:</p>
            <p>My car {model}, year {year},{colortwo} and the brand <strong>{brand}</strong></p>   
            <br/>
            <p>My car modal {carone.model}, year {carone.year}, color {carone.color} and the brand <strong>{carone.brand}</strong> </p>      
            <button type="button" onClick={()=>{
                setCarone((prestates)=>{
                return {...prestates,color:"red",year:"2022"}    
                }) }}>Update color and year</button>


                <br/><br/>


            <h3>UseEffect :</h3>  
             Count the number: {count}    
             <br/>
             <h4>CounterTwo:</h4>
             <p>Initial State:{counttwo}</p>
              <button type="button" onClick={()=>{
                  setCounttwo(counttwo+1);
              }}>Increment Count +</button>  <br/><br/>
              Useeffect auto render: {calculation}<br/>
              UseEffect one time render: {timer}<br/><br/>

              <h3>UseContext</h3>
              <h4>Prop Drilling :</h4>
              <h5>{contextname}</h5>
        </>
    )
}
export default AboutUs;