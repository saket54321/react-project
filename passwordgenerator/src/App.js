import {useState,useEffect,useCallback,useRef} from "react"

function App() {
  const passref=useRef(null);
  const[password,setpassword]=useState("abcdefgh");
  const[length,setlength]=useState('8');
  const[number,setnumber]=useState(false); 
  const[char,setchar]=useState(false);
  const passwordchanger=useCallback(()=>{
    let passcode="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str=str+"0123456789"
    }
    if(char){
      str=str+"!@#$%^&*-_+=[]{}~`"
    }
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      passcode+=str.charAt(char);
    }
    setpassword(passcode);
  },[number,char,length])
  useEffect(()=>{
    passwordchanger()
    // here after using uasecallback we function as dependency because
    // this function is only change when when it depency is change
    // this function is tored in cached that is working function of usecallback

  },[number,char,length, passwordchanger])
  const copytoclipboard=()=>{
    // this is the reference of input 
    passref.current?.select();
    passref.current?.setSelectionRange(0, 999);
    // this is a way to copy in clipboard
    window.navigator.clipboard.writeText(password);

  }
  
  return (
    <>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
      value={password}
      type="text" 
      placeholder="password"
      readonly
      ref={passref}
      ></input>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       onClick={copytoclipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div>
      <input type="range"
      min={8}
      max={16}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>setlength(e.target.value)}
      ></input>
      <label>length:{length}</label>
      </div>
    </div>
    <div>
    <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
    </div>
    <div>
    <input
              type="checkbox"
              defaultChecked={number}
              id="characterInput"
              
              onChange={() => {
                  setnumber((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" >number</label>
    </div>
    </>
  );
}

export default App;
