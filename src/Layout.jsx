import { Outlet } from "react-router-dom";
//import './css/catalogo.css'

const Layout = () => {
    return (  
        <>

        <div>
            
            <h1>HOLA!!</h1>
            <main>
                <Outlet/>
            </main>
        </div>
    
        </> );
}
 
export default Layout;