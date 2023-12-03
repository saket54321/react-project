import { createContext,useContext } from "react";
export const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"hi todo",
            completed:false
        },
        
    ],
    addtodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    tooglecomplete:(id)=>{}


})

export const Todocontextprovider=Todocontext.Provider;
export const useTodo=()=>{
    return useContext(Todocontext);
}