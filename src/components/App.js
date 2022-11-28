import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  let arr = ["Marco" , "Polo"];
  const [name,setname] = useState(arr[0]);
  const [btn,setbtn] = useState(arr[1]);
  const change = () =>{
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;

    setname(arr[0]);
    setbtn(arr[1]);
  }
  return (
    <div id="main">
       <h1 id='marco-polo' >{name}</h1>
       <button id='marco-polo-toggler' onClick={change}>{btn}</button>
    </div>
  )
}


export default App;
