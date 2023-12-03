import { useEffect, useState } from "react";
import {Contextprovider} from "./context/context"
import Card from "./components/Card.jsx"
import ThemeBtn from "./components/ThemeBtn.jsx"
function App() {
  const [themeMode,setthemmode]=useState("light");
  const lightmode=()=>{
    setthemmode("light");
  }
  const darkmode=()=>{
    setthemmode("dark");
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    console.log(themeMode);
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <Contextprovider value={{themeMode,lightmode,darkmode}}>
       <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>

    </Contextprovider>
    
  )
}

export default App;
