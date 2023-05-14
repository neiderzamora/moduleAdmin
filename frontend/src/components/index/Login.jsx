import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email,
        password,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      // redirigir a la página de inicio de sesión exitoso
      navigate("/registro");
    } catch (error) {
      console.error(error);
    }
  };

  return (
/*     <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                Sign in.
              </h2>
            </div>

            <div class="mt-8">
              <div class="mt-6">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="POST"
                  class="space-y-6"
                >
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autocomplete="email"
                        required=""
                        placeholder="Your Email"
                        class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label
                      for="password"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div class="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autocomplete="current-password"
                        required=""
                        placeholder="Your Password"
                        class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        placeholder="Your password"
                        class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label
                        for="remember-me"
                        class="block ml-2 text-sm text-neutral-600"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>

                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-medium text-blue-600 hover:text-blue-500"
                      >
                        {" "}
                        Forgot your password?{" "}
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */

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
            className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 bg-[#55B7C9] font-semibold text-lg text-center rounded-xl'
          >
            Ingresar
          </button>
        </div>

        <div className='flex justify-center mt-4'>
          <p className='font-medium text-lg text-gray-200'>
            ¿No tienes cuenta?
          </p>
          <button className='text-lg pl-3 text-[#55B7C9] hover:scale-[1.06] ease-in-out transition-all' href={"/registro"}>
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
