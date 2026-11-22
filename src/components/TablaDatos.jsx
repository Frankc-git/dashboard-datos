
function TablaDatos({ datos }) {
  return (
    <div className="contenedor-tabla">
      <h3>Registro de ventas por producto</h3>

      <table className="tabla-datos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Ventas</th>
          </tr>
        </thead>

        <tbody>
          {datos.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.producto}</td>
              <td>{registro.categoria}</td>
              <td>
                ${registro.ventas.toLocaleString('es-MX')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaDatos
