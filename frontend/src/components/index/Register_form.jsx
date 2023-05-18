import React from "react";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router";
import axios from "axios";

const Register_form = () => {

  
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [idU, setIdU] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register_user/", {
        email,
        first_name,
        last_name,
        faculty,
        phone_number,
        idU,
        password,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      // redirigir a la página de inicio de sesión exitoso
      //navigate("/iniciar-sesion");
    } catch (error) {
      //Para verificar si el correo no existe     
        console.error(error);
      
    }
  };
  
  /* Select facultad y sus Estilos */
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#1D2432",
      color: "white",
      borderColor: state.isFocused ? "#55B7C9" : "#4B5563",
      boxShadow: state.isFocused ? "0 0 0 1px #55B7C9" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#55B7C9" : "#4B5563",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#55B7C9" : "transparent",
      color: state.isFocused ? "white" : "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#1D2432",
      color: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
  };
  
  const facultad = [
    { label: "Ingeniería de Sistemas" },
    { label: "Ingeniería Civil"},
    { label: "Derecho"},
    { label: "Psicología"},
    { label: "Medicina Veterinaria y Zootecnia"},
    { label: "Contaduría Pública"},
    { label: "Enfermeria Profesional"},
    { label: "Medicina"},
    { label: "Odontología"},
  ];


  const navigate = useNavigate();
  navigate("/iniciar-sesion");

  return (
    <div className="bg-[#111827] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto"
          src="logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-white">
          Registro
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6 text-white"
            >
              Correo Institucional
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su correo institucional"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="first_name"
              className="block text-md font-medium leading-6 text-white"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="first_name"
                required
                className="block w-full  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su nombre completo"
                value={first_name}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block text-md font-medium leading-6 text-white"
            >
              Apellido
            </label>
            <div className="mt-2">
              <input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="last_name"
                required
                className="block w-full  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su apellido completo"
                value={last_name}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="faculty"
              className="block text-md font-medium leading-6 text-white"
            >
              Facultad
            </label>
            <div className="mt-2">
            <Select
            className="text-white"
            defaultValue={{ label: "Seleccione su facultad", value: "Default" }}
            options={facultad}
            styles={customStyles}
            id="faculty"
            name="faculty"
            autoComplete="faculty-name"   
            value={faculty}
            onChange={(event) => setFaculty(event.target.value)}        
          />
                
            </div>
          </div>

          <div>
            <label
              htmlFor="phone_number"
              className="block text-md font-medium leading-6 text-white"
            >
              Teléfono celular
            </label>
            <div className="mt-2">
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                autoComplete="phone_number"
                required
                className="block w-full  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su número télefonico"
                value={phone_number}
                onChange={(event) => setPhoneNumber(event.target.value)} 
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="idU"
              className="block text-md font-medium leading-6 text-white"
            >
              ID Universidad
            </label>
            <div className="mt-2">
              <input
                id="idU"
                name="idU"
                type="text"
                autoComplete="idU"
                required
                className="block w-full  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su ID"
                value={idU}
                onChange={(event) => setIdU(event.target.value)} 
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6 text-white"
              >
                Contraseña
              </label>
              <div className="text-md">
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)} 
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#55B7C9] px-3 py-2.5 font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-lg pl-3 mt-8 hover:scale-[1.06] ease-in-out transition-all"
            >
              Registrarse
            </button>
          </div>
          <div className="flex justify-center">
        <p className="font-medium text-lg text-gray-200 mt-2">
          ¿Ya estas registrado?
        </p>
        <button
          className="text-lg pl-3 text-[#55B7C9] mt-2 hover:scale-[1.06] ease-in-out transition-all"
          onClick={() => navigate("/registro")}
          
        >
          Iniciar sesión
        </button>
      </div>
        </form>
      </div>
    </div>

  );
};

export default Register_form;
