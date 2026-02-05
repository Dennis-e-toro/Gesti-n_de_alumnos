import { useState } from "react";

function AlumnoEliminar() {
  const [mensaje, setMensaje] = useState("");

  const eliminarAlumno = () => {
    const id = prompt("Introduce el ID del alumno a eliminar");
    if (!id) return;

    fetch(`https://servidorclasedaw.onrender.com/alumno11/alumnos/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("No se pudo eliminar el alumno");
        }
        return res.text();
      })
      .then(() => {
        setMensaje("Alumno eliminado correctamente");
      })
      .catch(() => {
        setMensaje("No se encontró el alumno");
      });
  };

  return (
    <div className="box">
      <h2>Eliminar alumno</h2>
      <button onClick={eliminarAlumno}>Eliminar alumno</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default AlumnoEliminar;
