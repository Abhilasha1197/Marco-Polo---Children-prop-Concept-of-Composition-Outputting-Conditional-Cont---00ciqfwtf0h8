import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  let arr = ["Marco" , "Polo"];
  const [name,setname] = useState(arr[0]);
  const [btn,setbtn] = useState(arr[1]);
  const change = () =>{
    

    setname(btn);
    setbtn(name);
  }
  return (
    <div id="main">
       <h1 id='marco-polo' >{name}</h1>
       <button id='marco-polo-toggler' onClick={change}>{btn}</button>
    </div>
  )
}


export default App;
