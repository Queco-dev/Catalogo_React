

const Productos = ({imagen,artist,id,precio,medium}) => {

    //console.log()
    return ( 
        <>
        {/* <li key={fichita.id}>{fichita.artist}</li>
        <img src={fichita.imagen} alt={fichita.artist} /> */}

        <img src={imagen} alt={artist} />
        <li key={id}>{artist}</li>
        <p><b>Tipo:</b>{medium}</p>
        <p><b>Nombre:</b>{artist}</p>
        <p><b>Precio:</b>{precio}</p>
        </>
     );
}   
 
export default Productos;