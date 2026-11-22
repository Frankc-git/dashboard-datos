
function TarjetaMetrica({ titulo, valor, descripcion }) {
  return (
    <div className="tarjeta-metrica">
      <h3>{titulo}</h3>
      <p className="valor-metrica">{valor}</p>
      <span className="descripcion-metrica">
        {descripcion}
      </span>
    </div>
  )
}

export default TarjetaMetrica
