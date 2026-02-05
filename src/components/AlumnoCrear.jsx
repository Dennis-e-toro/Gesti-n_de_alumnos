import { useState } from "react";

function AlumnoCrear() {
  const [creado, setCreado] = useState(false);

  const crearAlumno = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido1 = document.getElementById("apellido1").value.trim();
    const apellido2 = document.getElementById("apellido2").value.trim();
    const edad = Number(document.getElementById("edad").value);
    const sexoInput = document.getElementById("sexo").value.trim().toUpperCase();
    const curso = Number(document.getElementById("curso").value);

    if (!nombre || !apellido1 || !apellido2 || !edad || !sexoInput || !curso) {
      alert("Rellena todos los campos correctamente");
      return;
    }
    if (sexoInput !== "F" && sexoInput !== "M") {
      alert('Sexo debe ser "F" o "M"');
      return;
    }

    const alumno = {
      nombre,
      apellido1,
      apellido2,
      edad,
      sexo: sexoInput,
      curso,
      foto: "https://thispersondoesnotexist.com/image?random=" + Date.now()
    };

    fetch("https://servidorclasedaw.onrender.com/alumno11/alumnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alumno)
    })
      .then(res => {
        if (!res.ok) {
          return res.text().then(text => { throw new Error(text || "ERROR 422"); });
        }
        return res.json();
      })
      .then(() => {
        setCreado(true);

        document.getElementById("nombre").value = "";
        document.getElementById("apellido1").value = "";
        document.getElementById("apellido2").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("sexo").value = "";
        document.getElementById("curso").value = "";
      })
      .catch(err => alert("Error al crear alumno: " + err.message));
  };

  return (
    <div className="box">
      <h2>Crear alumno</h2>
      <input id="nombre" placeholder="Nombre" />
      <input id="apellido1" placeholder="Apellido 1" />
      <input id="apellido2" placeholder="Apellido 2" />
      <input id="edad" type="number" placeholder="Edad" />
      <input id="sexo" placeholder="Sexo (F/M)" />
      <input id="curso" type="number" placeholder="Curso (ej. 1, 2)" />
      <button onClick={crearAlumno}>Crear alumno</button>
      {creado && <p className="creado">Alumno creado correctamente</p>}
    </div>
  );
}

export default AlumnoCrear;
