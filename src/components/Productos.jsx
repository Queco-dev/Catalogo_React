

const Productos = ({imagen,artist,id}) => {

    //console.log()
    return ( 
        <>
        {/* <li key={fichita.id}>{fichita.artist}</li>
        <img src={fichita.imagen} alt={fichita.artist} /> */}

        <li key={id}>{artist}</li>
        <img src={imagen} alt={artist} />
        </>
     );
}
 
export default Productos;