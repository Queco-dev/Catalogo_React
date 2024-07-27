import { Outlet } from "react-router-dom";
import { createContext,useState } from "react";
import Catalogo from "./pages/Catalogo";
import './css/catalogo.css'


export const ModoOscuroContext= createContext("light")



const Layout = () => {
    
    const [tema,setTema]=useState("light")

    const nombre="Tomy"



    return (  
        <>

        <ModoOscuroContext.Provider value={{tema,setTema,nombre}}/>

        <div>
            
            <h1>HOLA!!</h1>
            <Catalogo/>

            <main>
                <div>

            <button onClick={()=>{setTema(tema== "dark"?"light":"dark")}}>Cambiar Tema:{tema}</button>
                </div>
                <Outlet/>
            </main>
            
        </div>
    
        </> );
}
 
export default Layout;