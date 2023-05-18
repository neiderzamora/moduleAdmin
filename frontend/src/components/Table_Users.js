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
    }
    return (
      <>
        <div className="sm:flex sm:flex-col min-h-screen bg-zinc-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 xl:max-w-full">
            <h1 className="text-xl mb-2 dark:text-gray-200">Usuarios</h1>

            <div className="overflow-auto overflow-y-scroll rounded-lg shadow hidden md:block max-w-full sm:max-w-full md:max-w-xl lg:max-w-4xl xl:max-w-full">
              <table className="max-w-full table-auto w-full md:w-auto lg:w-auto xl:w-full">
                <thead className="bg-gray-800 border-b-2 border-gray-200 dark:bg-black-field">
                  <tr>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Correo
                    </th>

                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Nombre
                    </th>

                    <th className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Apellido
                    </th>

                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Facultad
                    </th>

                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Telefono
                    </th>

                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
                      Id
                    </th>

                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-200">
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
                        <b className="font-bold text-blue-500">
                          {item.email}
                        </b>
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
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {data.map((item, index) => (
                <div className="bg-white space-y-3 p-4 rounded-lg shadow dark:bg-gray-800 dark:shadow-lg dark:shadow-offset-x-2 dark:shadow-offset-y-4 dark:shadow-opacity-50 dark:shadow-color-blue-500">
                  <div className="flex items-center space-x-2 text-sm">
                    <UsersIcon className="text-blue-500 font-bold h-5 w-5" />
                    <div>
                      <b className="text-blue-500 font-bold">
                        {item.num_person}
                      </b>
                    </div>

                    <div className="text-blue-800 bg-blue-200 rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium dark:bg-blue-800 dark:text-blue-200">
                      {item.date}
                    </div>
                    <div className="text-blue-800 bg-blue-200 rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium dark:bg-blue-800 dark:text-blue-200">
                      {item.hour}
                    </div>

                    <div>
                      <span
                        className={`p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 ${
                          item.status.toLowerCase() === "activo"
                            ? "text-green-800 bg-green-200 dark:bg-green-800 dark:text-green-200"
                            : "text-red-800 bg-red-200 dark:bg-red-800 dark:text-red-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <div className="text-gray-500 dark:text-gray-200">
                      {item.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-200">
                      {item.last_name}
                    </div>

                    <div>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 dark:bg-yellow-800 dark:text-yellow-200">
                        {item.campus}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <PhoneArrowUpRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-50" />

                    <div className="text-gray-500 dark:text-gray-200">
                      {item.telefone_number}
                    </div>
                    <div className="text-blue-800 rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium dark:text-blue-400">
                      {item.created_at}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <AtSymbolIcon className="w-5 h-5 dark:text-gray-50 " />

                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {item.email}
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 dark:text-gray-200">
                    {item.description}
                  </div>

                  <hr className="my-4 border border-solid border-gray-600 border-opacity-50 dark:border-gray-400" />

                  <div className="flex items-center justify-end space-x-2 text-sm">
                    <button className="bg-gray-200 rounded-3xl w-9 flex items-center justify-center dark:bg-gray-900">
                      <Link to={`/Editar_reserva/${item.id}`}>
                        <PencilSquareIcon className="h-8 w-8 p-1 text-gray-800 dark:text-gray-200" />
                      </Link>
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-gray-200 rounded-3xl w-9 flex items-center justify-center dark:bg-gray-900"
                    >
                      <TrashIcon className="h-8 w-8 p-1 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </>
    );
  };

export default Table_Users;
