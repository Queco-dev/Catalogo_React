import { useState } from "react"


let nuevoID=0


const Laboratorio2=()=>{

    const faena= ["faena1","faena2","faena3"]

    const [resultados,setResultados]=useState([])

    const [nuevaCartera,setNuevaCartera]=useState("")

    return(

        <>



        <h1>pruebas</h1>

        <input type="text"
        value={nuevaCartera}
        onChange={(e)=>{setNuevaCartera(e.target.value) - console.log("funciona",e.target.value)}}
        placeholder="amor" />
        <button onClick={()=>setResultados([...resultados,{id:nuevoID++,nuevaCartera:nuevaCartera}])}>Agregar</button>
        <ul>
            {resultados.map( (result,index)=>{

                return(
                    <>
                    <li key={index}>{result.nuevaCartera}</li>
                    <button onClick={()=>setResultados(resultados.filter( (fistro)=>{
                        return(
                            fistro.id !== result.id
                        )
                    }))}>Quitar</button>
                    </>
                )
            })}

        </ul>

        </>

    )
}

export default Laboratorio2





// import { useState,useEffect } from "react";
// import Micartera from "../MiCartera";
// import "../css/catalogo.css"

// // const convert=(saldo)=>{
// //     return saldo *0.2
// // }

// let nuevoId=0

// const CatalagoOk=()=>{
    
//     const [resultados,setResultados]=useState([])
//     const [ingreso,setIngreso]=useState()
//     const [euros,setEuros]=useState(0)
//     const [saldo,setSaldo]=useState(0)
//     const [nuevaCartera,setNuevaCartera]=useState([])
//     console.log("NUEVACARTERA",nuevaCartera)
//     const [inform,setInform]=useState({
//         count:0,
//         nestx:null,
//         pages:0,
//         prev:null
//     })

//     // const handleEuros=()=>{
//     //     setEuros(ingreso+euros)
//     // }

//     // const handleCartera=()=>{
//     //     setCartera(...resultados)
//     // }

//     useEffect( ()=>{

//         getCatalogo()

//     },[])



//     const getCatalogo=async()=>{

//         const control= new AbortController()
//         try{
//             const respuesta=await fetch("/artist.json")
//             const objJs=await respuesta.json()
//             console.log(objJs)
//             setResultados(objJs.results)
//         }catch(error){console.log("menudo error",error)}
//         finally{control.abort()}
//     }


//     return (

//         <>
//         <h1>Catalogo</h1>
//             <div>Mi cartera</div>
//         <h2>obras:{inform.count}</h2>
//         {/* <Micartera/> */}



//         <div className= "miCartera">

//             <div>
//             <input type="number"
//             value={ingreso}
//             onChange={(e)=>setIngreso(e.target.value)}
//             placeholder="Euros" />
//             <button onClick={()=>setSaldo((ingreso*0.2)+saldo) - setIngreso("")}>Ingresar</button>
//             <h4>Saldo Disponible</h4><h2>{saldo} ETH</h2>
//             <h3>{saldo*5} Euros</h3>
//             </div>

//             <div>
//                 <h1>Mi cartera</h1>
//                 <ul>
//                     {nuevaCartera.map( (obras)=>{
//                         const{artist}=obras
//                         return(
//                             <>
//                             <li key={obras.id}>{obras.artist}  <b>{obras.precio}</b></li>
//                             </>
//                         )
//                     })}
//                 </ul>
//             </div>




//         </div>

//         <div>

//         <ul>
//             {resultados.map( (datos)=>{
//                 return(
//                     <>
//                     <li key={datos.id}>
//                     <img src={datos.url} alt={datos.artist}/>
//                     {datos.artist}
//                     <p><b><h3>Precio: {datos.precio}</h3></b></p>
//                     <button onClick={()=>setNuevaCartera([...resultados,nuevaCartera])}>Comprar</button></li>
//                     </>
//                 )
//             })}
//         </ul>
//         </div>
//         </>

//     )
// }



// export default CatalagoOk