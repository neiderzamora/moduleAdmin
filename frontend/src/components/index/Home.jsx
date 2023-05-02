import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <>
        {/*<div className="w-100 text-lg"><h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Bienvenido</h1></div>*/}
        
            <Outlet/>
        </>
    )
}
export default Home 