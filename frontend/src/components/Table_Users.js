import {
  UsersIcon,
  PhoneArrowUpRightIcon,
  AtSymbolIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { deleteUser, getUsers } from "./Api";

const Table_Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(`Error al eliminar reserva con ID ${id}:`, error);
      });
  };
  return (
    <>
      <div className="sm:flex sm:flex-col min-h-screen bg-zinc-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 xl:max-w-full">
          <h1 className="text-3xl font-bold mb-4 text-gray-100">Lista de Eventos</h1>

          <div className="overflow-auto overflow-y-scroll rounded-lg shadow hidden md:block max-w-full sm:max-w-full md:max-w-xl lg:max-w-4xl xl:max-w-full">
            <table className="max-w-full table-auto w-full md:w-auto lg:w-auto xl:w-full">
              <thead className="bg-gray-800 border-b-2 border-gray-200">
                <tr>
                  <th className="w-20 p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Correo
                  </th>

                  <th className="w-20 p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Nombre
                  </th>

                  <th className="p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Apellido
                  </th>

                  <th className="w-24 p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Facultad
                  </th>

                  <th className="w-24 p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Telefono
                  </th>

                  <th className="w-24 p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Id
                  </th>

                  <th className="w-24 p-3 text-[1rem] font-semibold tracking-wide text-left dark:text-gray-200">
                    Fecha Ingreso
                  </th>

                  {/* <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Acciones
                    </th> */}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-900">
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-700"
                    }`}
                  >
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <b className="font-bold text-blue-500">{item.email}</b>
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                      {item.first_name}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                      {item.last_name}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                      {item.faculty}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                      {item.phone_number}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                      {item.idU}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                      {item.date_joined}
                    </td>

                    {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex items-center space-x-2">
                        <Link to={`/Editar_reserva/${item.id}`}>
                          <PencilSquareIcon className="h-5 w-5 text-gray-80 dark:text-gray-200" />
                        </Link>
                        <button onClick={() => handleDelete(item.idU)}>
                          <TrashIcon className="h-5 w-5 text-red-600" />
                        </button>
                      </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to={`/perfil`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Regresar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table_Users;
