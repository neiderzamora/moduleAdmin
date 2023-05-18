import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";


const VistaEventos = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      // Realiza una solicitud GET a la API para obtener la lista de eventos
      axios.get('http://127.0.0.1:8000/api/events/')
        .then(response => {
          setEvents(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
        <div className="bg-[#111827] flex text-white py-8">
        <div className=" bg-[#111827] max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Lista de Eventos</h1>
          <table className="w-full">
            <thead>
              <tr className='text-left '>
                <th className="py-2 pl-6">Título</th>
                <th className="py-2 pl-6">Descripción</th>
                <th className="py-2 pl-6">Fecha</th>
                <th className="py-2 pl-6">Hora</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="bg-gray-800">
                  <td className="py-4 pl-6">{event.title}</td>
                  <td className="py-2 pl-6">{event.description}</td>
                  <td className="py-2 pl-6">{event.date}</td>
                  <td className="py-2 pl-6 px-6">{event.hour}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate("/eventos")}>
              {"<<"}
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default VistaEventos;