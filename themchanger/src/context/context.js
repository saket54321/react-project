import { useContext,createContext } from "react";
export const context=createContext({
    themeMode:"light",
    lightmode:()=>{},
    darkmode:()=>{}

});
// its nome should start with capital letter
 export const Contextprovider=context.Provider


//  export default function useTheme(){
//     return useContext(context);
//  }