
import { useState } from 'react';
import { obtenerSerieDeTiempo } from '../services/dataService';

function PanelAnalitico() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const consultarDatos = async () => {
    setCargando(true);
    setError('');
    setDatos([]);

    try {
      const resultado = await obtenerSerieDeTiempo();
      setDatos(resultado);
    } catch (err) {
      setError('No se pudieron obtener los datos meteorológicos.');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="panel-analitico">
      <h2>Análisis de datos meteorológicos</h2>

      <p>
        Consulta las temperaturas por hora de Ciudad de México
        mediante la API de Open-Meteo.
      </p>

      <button onClick={consultarDatos} disabled={cargando}>
        {cargando ? 'Analizando datos...' : 'Consultar API'}
      </button>

      {cargando && <p>Analizando datos...</p>}

      {error && (
        <p style={{ color: 'red' }} role="alert">
          {error}
        </p>
      )}

      {datos.length > 0 && (
        <div>
          <h3>Resultados de la consulta</h3>

          <table className="tabla-datos">
            <thead>
              <tr>
                <th>Fecha y hora</th>
                <th>Temperatura (°C)</th>
              </tr>
            </thead>

            <tbody>
              {datos.map((registro) => (
                <tr key={registro.fecha}>
                  <td>{registro.fecha.replace('T', ' ')}</td>
                  <td>{registro.temperatura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default PanelAnalitico;
