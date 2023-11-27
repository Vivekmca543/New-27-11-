import React,{useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Compthree from "./Propcomponents/Compthree/Compthree";
import Comptwo from "./Propcomponents/Comptwo/Comptwo";
import Compfive from "./Propcomponents/Compfive/Compfive";

import Headermenu from "./Component/Headermenu/Headermenu";
function App() {
  // let [user] = useState({
  //   isReactcovered: true,
  //   languagename:"Reactjs"
  // })
  const [elements,setElements] = useState(["Prod1","Prod2"]);
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <Headermenu/>
    <div className="container pt-5">
      {/* ReactJs */}
      {/* <Compthree /> */}
      {/* <Comptwo /> */}

      {/* <h3>Counter</h3>
      <strong>{count}</strong><br/>
      <button onClick={()=>setCount(count+1)}>Count +</button><br/><br/>
      <ul className="list-group list-group-horizontal w-50">
      {elements.map((element,i) =>{
          return(
           <li className="list-group-item w-50">
            <Compfive name={element} key={i}/>
            </li>
          )
        })}
        </ul> */}
      

    </div>  
    </div>
  );
}

export default App;
