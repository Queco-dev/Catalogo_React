import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error= useRouteError()
    console.log(error)


    return ( 
        <>
        <div>
            <h1>Ooops, vaya tio lo siento! la laif. </h1>
            <p>
                {error?.statusText || error?.message || "Pagina no encontrada"}
            </p>
        </div>
        </>
     );
}
 
export default ErrorPage;