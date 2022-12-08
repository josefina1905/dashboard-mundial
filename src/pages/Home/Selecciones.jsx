function selecciones() {
  const [selecciones, setselecciones] = useState({});
useEffect(() => {
    async function getSelecciones() {
      const selecciones = await seleccionesController.getselecciones();
      setselecciones(selecciones);
    }
    getSeleccion();
  }, []);
  return (
    <>
      <h1>Seleccion:</h1>
      <p>
        Nombre:
        {' '}
        {selecciones.name}
      </p>
      <p>
        
      </p>
      {selecciones.map((selecciones) => (selecciones.filter(selecciones=>selecciones.grupo==="A"))}
    </>
  );
  }