import Error from "./components/index/Error";
import Eventos from "./components/index/Eventos";
import Login from "./components/index/Login";
import Perfil from "./components/index/Perfil";
import Register_form from "./components/index/Register_form";
import VistaEventos from "./components/index/VistaEventos";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
    <Routes>
      <Route path="registro" element={<Register_form/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="perfil" element={<Perfil/>}/>
      <Route path="eventos" element={<Eventos/>}/>     
      <Route path="list-eventos" element={<VistaEventos/>}/>     
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </>
    
  );
}

export default App;