import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Por favor ingrese su correo y contraseña");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email,
        password,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      // redirigir a la página de inicio de sesión exitoso
      navigate("/perfil");
    } catch (error) {
      //Para verificar si el correo no existe
      if (error.response && error.response.status === 404) {
        alert("El correo ingresado no existe");
      } else {
        console.error(error);
      }
    }
  };
  

  return (

    <div className="flex flex-col lg:flex-row w-full h-screen">
  <div className="bg-[#111827] w-full lg:w-1/2 flex items-center justify-center">
    <form 
    onSubmit={handleSubmit}
    action="#"
    method="POST"
    className='px-10 py-20 rounded-e-3xl w-full max-w-md lg:ml-auto lg:mr-0'>
      <h1 className='text-5xl text-white font-semibold'>Bienvenido</h1>
      <p className='font-medium text-lg text-gray-200 mt-4'>
        ¡Bienvenido! Por favor ingrese sus datos
      </p>

      <div className='mt-5'>
        <div>
          <label className='text-lg text-white font-medium'>Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autocomplete="email"
            required=""
            className='w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]'
            placeholder='Ingrese su correo'
          />
        </div>

        <div className="mt-4">
          <label className='text-lg text-white font-medium'>Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autocomplete="current-password"
            required=""
            className='w-full border border-gray-500 text-white rounded-xl p-3 mt-1 bg-[#1D2432]'
            placeholder='Ingrese su contraseña'
          />
        </div>

        <div className='mt-6 flex flex-col gap-y-4'>
          <button
            type="submit"
            className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 bg-[#55B7C9] font-semibold text-lg text-center rounded-xl'
          >
            Ingresar
          </button>
        </div>

        <div className='flex justify-center mt-4'>
          <p className='font-medium text-lg text-gray-200'>
            ¿No tienes cuenta?
          </p>
          <button 
          
          className='text-lg pl-3 text-[#55B7C9] hover:scale-[1.06] ease-in-out transition-all' onClick={() => navigate("/registro")}>
            Registrate
          </button>
        </div>
      </div>
    </form>
  </div>

  <div className="relative lg:w-1/2 h-full flex items-center justify-center bg-[#111827]">
    <img src="logo.png" className="w-[50%] lg:w-[50%]" alt="Imagen de Fondo"/>
  </div>
</div>

  );
};

export default Login;
