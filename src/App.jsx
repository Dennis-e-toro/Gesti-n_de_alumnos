import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AlumnoCrear from "./components/AlumnoCrear";
import AlumnoBuscar from "./components/AlumnoBuscar";
import AlumnoEliminar from "./components/AlumnoEliminar";
import NotasAlumnos from "./components/NotasAlumnos";
import "./App.css";

function App() {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);
  const [accion, setAccion] = useState(null);

  const cambiarAccion = (nuevaAccion) => {
    if (nuevaAccion !== "notas") {
      setAlumnoSeleccionado(null);
    }
    setAccion(nuevaAccion);
  };


  return (
    <>
      <HeaderComponent />

      <main className="container">
        <div className="actions">
          <button className="action-btn" onClick={() => cambiarAccion("crear")}>Crear alumno</button>
          <button className="action-btn" onClick={() => cambiarAccion("buscar")}>Buscar alumno</button>
          <button className="action-btn" onClick={() => cambiarAccion("eliminar")}>Eliminar alumno</button>
          <button className="action-btn" onClick={() => cambiarAccion("notas")}>Ver notas</button>
        </div>

        {accion === "crear" && <AlumnoCrear />}
        {accion === "buscar" && <AlumnoBuscar setAlumno={setAlumnoSeleccionado} />}
        {accion === "eliminar" && <AlumnoEliminar />}
        {accion === "notas" && alumnoSeleccionado && <NotasAlumnos alumno={alumnoSeleccionado} />}

        {alumnoSeleccionado && (
          <div className="box">
            <h2>Alumno seleccionado</h2>
            <p><b>ID:</b> {alumnoSeleccionado.id}</p>
            <p><b>Nombre:</b> {alumnoSeleccionado.nombre}</p>
            <p><b>Apellido 1:</b> {alumnoSeleccionado.apellido1}</p>
            <p><b>Apellido 2:</b> {alumnoSeleccionado.apellido2}</p>
            <p><b>Edad:</b> {alumnoSeleccionado.edad}</p>
            <p><b>Sexo:</b> {alumnoSeleccionado.sexo}</p>
            <p><b>Curso:</b> {alumnoSeleccionado.curso}</p>
            <img className="foto-alumno" src={alumnoSeleccionado.foto} alt="Foto del alumno" />
          </div>
        )}
      </main>

      <FooterComponent />
    </>
  );
}

export default App;
