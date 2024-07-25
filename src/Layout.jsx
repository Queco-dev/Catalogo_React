import { Outlet } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import './css/catalogo.css'

const Layout = () => {
    return (  
        <>

        <div>
            
            <h1>HOLA!!</h1>
            <Catalogo/>

            <main>
                <Outlet/>
            </main>
        </div>
    
        </> );
}
 
export default Layout;