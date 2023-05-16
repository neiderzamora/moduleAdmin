import Error from "./components/index/Error";
import Eventos from "./components/index/Eventos";
import Home from "./components/index/Home";
import Login from "./components/index/Login";
import Perfil from "./components/index/Perfil";
import Register_form from "./components/index/Register_form";
import Sign_in from "./components/index/Sign_in";
import Users from "./components/index/Users";

import { Route, Routes } from "react-router";
{/**/}

function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="sign" element={<Sign_in/>}/>
      <Route path="registro" element={<Register_form/>}/>
      <Route path="iniciar-sesion" element={<Login/>}/>
      <Route path="perfil" element={<Perfil/>}/>
      <Route path="eventos" element={<Eventos/>}/>     
      <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>

    {/* Esto para que aparezca de primeras el login */}
    {/* <Login></Login> */}
    </>
    
  );
}

export default App;