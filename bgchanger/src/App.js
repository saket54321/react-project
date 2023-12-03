import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const[color,setcolor]=useState("olive");
  return (
    <>
    <div style={{backgroundColor: color}}>
      <button onClick={()=>{setcolor("red")}} style={{backgroundColor: color}}>red</button>


    </div>
    </>
    
  );
}

export default App;
