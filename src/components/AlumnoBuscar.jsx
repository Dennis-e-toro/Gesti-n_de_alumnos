function AlumnoBuscar({ setAlumno }) {
  const buscarAlumno = () => {
    const id = prompt("Introduce el ID del alumno");
    if (!id) return;

    fetch(`https://servidorclasedaw.onrender.com/alumno11/alumnos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setAlumno(data))
      .catch(() => setAlumno(null));
  };

  return <button className="btn" onClick={buscarAlumno}>Buscar alumno</button>;
}

export default AlumnoBuscar;
