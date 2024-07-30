import { Outlet } from "react-router-dom";
import { createContext,useState } from "react";
import Catalogo from "./pages/Catalogo";
import './css/catalogo.css'
import Laboratorio from "./LABORATORIO/Laboratorio";
import CatalagoOk from "./pages/CatalogoOk";
import Laboratorio2 from "./LABORATORIO/Laboratorio2";
import CanvasSketch from "./LABORATORIO/CanvasSketch";









export const ModoOscuroContext= createContext("light")



const Layout = () => {
    
    // const [tema,setTema]=useState("light")

    // const nombre="Tomy"



    return (  
        <>



        <h1>home</h1>
        <div >
        <CatalagoOk/>
        <Laboratorio2/>
        <CanvasSketch/>

        <script scr="/LABORATORIO/CanvasSketch.js"></script>
        <script src="/LABORATORIO/Historias/js/javascript.js"></script>
        

        </div>
        {/* <ModoOscuroContext.Provider value={{tema,setTema,nombre}}/> */}

            {/* <div>
            
            <h1>HOLA!!</h1>
            <Catalogo/>
            <Laboratorio/>
            </div> */}
            {/* <CanvasSketch1/> */}
            {/* <CanvasSketch/> */}
            
            {/* <Sketch /> */}

            
            

            <div>
            {/* <main>
                <div>

            <button onClick={()=>{setTema(tema== "dark"?"light":"dark")}}>Cambiar Tema:{tema}</button>
                </div>
                <Outlet/>
            </main>
             */}
        </div>
    
        </> );
}
 
export default Layout;