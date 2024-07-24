import { useParams } from "react-router-dom";


const Producto = () => {
    const {productoId}= useParams();


    return ( 
    <>
    <h1>Estoy viendo un producto:{productoId}</h1>
    </> 
    );
}
 
export default Producto;