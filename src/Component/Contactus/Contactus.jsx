import React,{UseContext,useRef,useEffect,useState} from "react";
import "./Contactus.css";
const Contactus = ()=>{
    // const usernames = UseContext(UserContext);

    const [inputvalue,setInputvalue] = useState("");
    const count = useRef(0);
    const inputtypeelement = useRef();
    useEffect(()=>{
        count.current = count.current+1;
    });

    const [inputrefvalue,setInputrefvalue] = useState("");
    let previousvalue = useRef("");
    useEffect(()=>{
        previousvalue.current = inputrefvalue;
    },[inputrefvalue]);
    const staticjson = {
        para:"Fusion VR Copyrights © 2023 All Rights Reserved. Designed by Dream Effects Multimedia",
    }
    return(
        <>
        <div className="contactus-container">
        <h4>Contact Us</h4>
        <form>
        <div className="input-felds">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />    
        </div>
        <div className="input-felds">
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" />    
        </div>
        <div className="input-felds">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />    
        </div>
        <div className="input-felds">
            <label htmlFor="selectcountry">Select country</label>
            <select id="selectcountry">
                    <option>India</option>
                    <option>United states</option>
                    <option>United Nation</option>
                    <option>Canada</option>
            </select>    
        </div>
        <div className="input-felds">
            <label htmlFor="selectstate">Select State</label>
            <select id="selectstate">
                    <option>Andhra Pradesh</option>
                    <option>Haryana</option>
                    <option>manipur</option>
                    <option>Sikkim</option>
                    <option>Tamilnadu</option>
            </select>    
        </div>
        <button>Submit</button>
        </form>
    </div>
    <div className="footer">
            {staticjson.para}
        </div>
            <h3>UseRef</h3>
            {/* {usernames} */}
            <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
            <h4>Render Count: {count.current}</h4>
            <input type="text" ref={inputtypeelement}/>
            <button onClick={()=>inputtypeelement.current.focus()}>FocusElement</button><br/>
            <input type="text" value={inputrefvalue} onChange={(e)=>{setInputrefvalue(e.target.value)}} />
            {previousvalue.current}
        </>
    )
}
export default Contactus;