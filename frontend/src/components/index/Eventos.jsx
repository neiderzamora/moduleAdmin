import React from 'react'
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Eventos = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos a un servidor o almacenarlos localmente.
  };

  return (
<div className="bg-[#111827] min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Título del evento
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Descripción
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Fecha
          </label>
          <Calendar
            className="bg-white text-gray-900 rounded-md p-4 shadow"
            onChange={(newDate) => setDate(newDate)}
            value={date}
          />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Localización
            </label>
            <input
              type="text"
              id="location"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
              Hora
            </label>
            <input
              type="time"
              id="time"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Eventos