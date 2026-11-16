
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="contenido">
        <h2>Bienvenido al Dashboard</h2>
        <p>
          Entorno de desarrollo frontend para la visualización
          y análisis de datos.
        </p>

        <div className="tarjeta">
          <h3>Estado del proyecto</h3>
          <p>React + Vite funcionando correctamente.</p>
          <span className="estado">● Entorno activo</span>
        </div>
      </main>
    </div>
  )
}

export default App
