import React, { useState, useMemo } from "react";
import {
  RiDashboardLine,
  RiUser6Line,
  RiLogoutBoxLine,
  RiChatHistoryLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiSearch2Line,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import { useTable, usePagination } from "react-table";
import { useNavigate } from "react-router";

const Perfil = () => {
  const navigate = useNavigate();

  /* const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('URL_DE_TU_API');
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useMemo(() => {
    fetchData();
  }, []); */

  /* Datos random, se supone aqui va info de los estudiantes que se registran, obvio despues se manda con axios */
    const data = useMemo(
        () => [
          {
            id: "542387",
            correo: "alguien.algo@campusucc.edu.co",
            nombre: "Pepito",
            apellido: "Martinez",
            facultad: "Derecho",
            telefono: "3102890374",
          },
        ],
        []
      );
    
      const columns = useMemo(
        () => [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Correo Institucional",
            accessor: "correo",
          },
          {
            Header: "Nombre",
            accessor: "nombre",
          },
          {
            Header: "Apellido",
            accessor: "apellido",
          },
          {
            Header: "Facultad",
            accessor: "facultad",
          },
          {
            Header: "Telefono",
            accessor: "telefono",
          },
        ],
        []
      );
    
/* Paginacion y Lectura de los datos */
      const tableInstance = useTable({ columns, data }, usePagination);
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex }
      } = tableInstance;
    
    
     
/* Parte izquierda del sidebar */
      const [sidebar, setSidebar] = useState(false);
    
      const handleSidebar = () => {
        setSidebar(!sidebar);
      };
      const [setShowModalNotifi] = useState(false);


  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
        {/* Barra Lateral Izquierda */}
        <div
          className={`fixed border-e border-gray-600 lg:static w-[60%] md:w-[40%] lg:w-full top-0 z-50 transition-all ${
            sidebar ? "-left-0" : "-left-full"
          } h-full w-full  bg-[#0F1523] col-span-1 p-4`}
        >

{/* Logo */}

          <div className="text-center p-6">
            <h1 className="font-bold tracking-[4px] text-2xl font-serif text-white">
              Admin
            </h1>
          </div>
          <div className="flex flex-col justify-between h-[600px]">

{/* Menu */}

            <nav>
              <ul>
                <li>
                  <button
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                    onClick={() => navigate("/eventos")}
                  >
                    <RiDashboardLine />
                    Eventos
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                    onClick={() => navigate("/list-eventos")}
                  >
                    <RiChatHistoryLine />
                    Lista Eventos
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white" onClick={() => navigate("/panel")}
                  >
                    <RiUser6Line />
                    Usuarios
                  </button>
                </li>
                
                <li>                  
                  <button                    
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                    onClick={() => navigate("/")}
                  >
                    <RiLogoutBoxLine />
                    Salir 
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

{/* Boton devuelta a barra izquierda */}

        <button
          className="block lg:hidden fixed bottom-4 right-4 bg-[#1F2937] text-white rounded-full text-4xl p-3"
          onClick={handleSidebar}
        >
          {sidebar ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
        </button>
{/* Contenido */}

        <div className="bg-[#111827] col-span-5 ">
{/* Cabecera */}

          <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 w-full border-b border-gray-700">
            {/* Buscador */}
            <form className="w-full md:w-[50%] order-1 md:-order-none">
              <div className="relative">
                <RiSearch2Line className="text-white absolute left-2 top-3" />
                <input
                  type="search"
                  className="bg-[#111827] py-2 px-8 pr-4 rounded-lg outline-none text-white w-full"
                  placeholder="Buscar..."
                />
              </div>
            </form>
            {/* Notificaciones */}
            <nav className="w-full md:w-[50%] flex justify-center md:justify-end">
              <ul className="flex items-center gap-5">
                <li>
                  <button href="/notificaciones" className="relative">
                    <RiNotification3Line
                      className="text-2xl text-white"
                    />
                    <RiCheckboxBlankCircleFill className="absolute right-0 -top-1 text-xs text-red-500" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1 text-white"
                  >
                    User
                    <RiArrowDownSLine />
                  </button>
                </li>
              </ul>
            </nav>
          </header>

 {/* Tabla de Datos de Fecha, y esas cosas*/}

        <>
      <div className="bg-[#111827] shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-5 px-6 text-white text-left text-lg"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className="text-gray-200 text-md font-light"
            {...getTableBodyProps()}
          >
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  className="border-b border-gray-500 hover:bg-gray-700"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        key={cell.getCellProps().key}
                        {...cell.getCellProps()}
                        className="py-4 px-6 text-left whitespace-nowrap"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="pagination flex justify-center p-4">
              <button onClick={() => previousPage()} disabled={!canPreviousPage}className={`mx-1 bg-[#303d4f] text-white rounded py-2 px-4 hover:scale-110 transition-all ${
                !canPreviousPage && "opacity-50 cursor-not-allowed"
              }`}>{'<'}</button>
              <span className="text-white">
                Página{' '}
                <strong>
                  {pageIndex + 1} de {pageOptions.length}
                </strong>{' '}
              </span >
              <button onClick={() => nextPage()} disabled={!canNextPage} className={`mx-1 bg-[#303d4f] text-white rounded py-2 px-4 hover:scale-110 transition-all${
                !canNextPage && "opacity-50 cursor-not-allowed"
              }`}>{'>'}</button>
            </div>
        </div>
    </>

        </div>
      </div>
  )
}

export default Perfil