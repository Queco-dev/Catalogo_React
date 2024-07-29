import { useState,useEffect } from "react"
import '../css/index.css'

let nuevoId= 0

const Laboratorio=()=>{


    const tareas=["tarea1","tarea2"]
    const [datos,setDatos]=useState([])
    const [nuevaTarea,setNuevaTarea]=useState("")

    const [count,setCount]=useState(0)
    const [luz,setLuz]=useState(true)

    const Luz={
        backgroundColor:"yellow",
        color:"green"
    }
    const Noche={
        backgroundColor:"brown",
        color:"white"
    }


    return(
        <>
        <h1>Soy Laboratorio</h1>
        <input 
        type="text"
        value={nuevaTarea}
        onChange={(e)=>{setNuevaTarea(e.target.value) - console.log("buenosDIas",e.target.value)}}
        placeholder="amor" />
        <button onClick={()=>setDatos([...datos,{id:nuevoId++,nuevaTarea:nuevaTarea}])}>Agregar</button>
        <ul>
            {datos.map( (deberes,index)=>{
                return (

                    <>
                    <li key={deberes.id}>{deberes.nuevaTarea}
                    <button onClick={()=>setDatos(datos.filter( (borrar)=>{
                        return(

                            borrar.id !== deberes.id
                        )
                    }))}>Quitar</button></li>

            </>
                )
            })}

        </ul>
        <div>               
        <button onClick={()=>setCount(count+1)}>Count{count} {count==1?"vez":"veces"}</button>
        </div>
        <div>
            <button 
            className={luz?"boy":"girl"}
            style={luz? Luz:Noche}
            onClick={()=>setLuz(!luz)}>{luz?"sol":"noche"}</button>
        </div>
        </>
    )
}

export default Laboratorio
