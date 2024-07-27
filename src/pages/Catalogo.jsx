
import {useState, useEffect,useContext } from "react"
import { ModoOscuroContext} from "../Layout"
import Producto from "./Producto"


const Catalogo = () => {

    const {tema,nombre,setTema}= useContext(ModoOscuroContext)

   const [ficha,setFicha]=useState([])
   //const [filterProducto,setFilterProducto]=useState([])


    useEffect( ()=>{

        getFicha()
        console.log("[hombe.jsx] Se debe estar cargando no?",getFicha)

    },[])



    const getFicha=async()=>{

        const control= new AbortController()
        try{
            const response= await fetch("/artist.json")
            const objJs= await response.json()
            setFicha(objJs.results)
            console.log("[Catalogo.jsx] te sale?",objJs)
        }catch(error){console.log("vaya, menudo error, te parece bonito?",error)}
        finally{(control.abort())}

    }

    


    return ( 
        <>
        <h1>Catalogo({tema} - {nombre})</h1>
        <p><button onClick={()=>{setTema(tema== "dark"?"light":"dark")}}>Cambiar Tema:{tema}</button></p>
        <article>

        <div>
        <ul>
            {ficha.map( (fichita,index)=>{
                return(
                    <>
                    <h1>Catalogo ({tema})</h1>
                    {/* <img src={fichita.imagen} alt={fichita.artist} />
                    <li key={fichita.id}>{fichita.artist}</li> */}
                    <Producto key={index} {...fichita}/>
                    </>
                )
                
            })}
        </ul>
        </div>
        </article>
        </> );
}
 
export default Catalogo;