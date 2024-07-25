
import {useState, useEffect } from "react"

const Home = () => {

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
            console.log("[Home.jsx] te sale?",objJs)
        }catch(error){console.log("vaya, menudo error, te parece bonito?",error)}
        finally{(control.abort())}

    }

    


    return ( 
        <>
        Welcome

        <ul>
            {ficha.map( (fichita,index)=>{
                return(
                    <>
                    <li key={fichita.id}>{fichita.artist}</li>
                    <img src={fichita.imagen} alt={fichita.artist} />
                    </>
                )

            })}
        </ul>
        </> );
}
 
export default Home;