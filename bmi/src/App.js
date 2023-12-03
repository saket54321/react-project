
import {useState} from "react";

export default function App() {
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState();
  const [message,setmessage]=useState(0);
  const calbmi=(e)=>{
    // to do not do his default behaviour
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setbmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setmessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setmessage('You are a healthy weight')
      } else {
        setmessage('You are overweight')
      }
    }
  }
  return (
    <>
    <div>
      <form onSubmit={calbmi}>
      <label>weight</label>
      
      <input  type="text"   onChange={(e)=>setweight(e.target.value)} placeholder="enter"></input>
      <label>height</label>
      <input  type="text" onChange={(e)=>setheight(e.target.value)}></input >
      <button type="submit">submit</button>
      <p>your bmi is{bmi}</p>
      <p>{message}</p>
      </form>
      
    </div>
    </>
  );
}
