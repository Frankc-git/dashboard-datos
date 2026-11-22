
import PanelAnalitico from './components/PanelAnalitico';
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import TarjetaMetrica from './components/TarjetaMetrica'
import TablaDatos from './components/TablaDatos'
import {
  obtenerDatos,
  calcularMetricas
} from './services/dataService'
import './App.css'

function App() {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarDatos() {
      try {
        const registros = await obtenerDatos()
        setDatos(registros)
      } catch (err) {
        console.error('Error al cargar los datos:', err)
        setError('No fue posible cargar los datos.')
      } finally {
        setCargando(false)
      }
    }

    cargarDatos()
  }, [])

  const metricas = calcularMetricas(datos)

  return (
    <div className="app">
      <Navbar />

      <main className="contenido">
        <h2>Panel de análisis de ventas</h2>
        <p>
          Visualización de información mediante componentes
          y servicios de React.
        </p>

        {cargando ? (
          <p>Cargando datos...</p>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : (
          <>
            <section className="contenedor-metricas">
              <TarjetaMetrica
                titulo="Total de productos"
                valor={metricas.totalRegistros}
                descripcion="Productos registrados"
              />

              <TarjetaMetrica
                titulo="Ventas totales"
                valor={`$${metricas.ventasTotales.toLocaleString('es-MX')}`}
                descripcion="Suma de las ventas"
              />

              <TarjetaMetrica
                titulo="Promedio de ventas"
                valor={`$${metricas.promedioVentas.toLocaleString('es-MX')}`}
                descripcion="Promedio por producto"
              />
            </section>

            <TablaDatos datos={datos} />
          </>
          
        )}
<PanelAnalitico />

      </main>
    </div>
  )
}

export default App
