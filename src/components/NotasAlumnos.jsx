import React, { useState, useEffect } from "react";

function NotasAlumnos({ alumno }) {
  const [notas, setNotas] = useState(null);

  useEffect(() => {
    if (!alumno) return;

    fetch(`https://servidorclasedaw.onrender.com/alumno11/alumnos/${alumno.id}/notas`)
      .then(res => res.json())
      .then(data => setNotas(data))
      .catch(() => setNotas([]));
  }, [alumno]);

  if (!alumno) return null;
  if (!notas) return <p className="info">Cargando notas...</p>;

  return (
    <div className="box">
      <h2>Notas de {alumno.nombre}</h2>
      <ul>
        {notas.map(({ codigo, nombre, nota }) => (
          <li key={codigo}>
            <b>{nombre} ({codigo}):</b> {nota}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotasAlumnos;
