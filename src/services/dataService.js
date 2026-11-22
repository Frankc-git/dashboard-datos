
import apiClient from './apiClient';
import datos from '../datos.json'

// Simula la obtención de datos desde un servicio
export async function obtenerDatos() {
  return Promise.resolve(datos)
}

// Calcula las métricas principales
export function calcularMetricas(registros) {
  const totalRegistros = registros.length

  const ventasTotales = registros.reduce(
    (acumulado, registro) => acumulado + registro.ventas,
    0
  )

  const promedioVentas =
    totalRegistros > 0
      ? ventasTotales / totalRegistros
      : 0

  return {
    totalRegistros,
    ventasTotales,
    promedioVentas
  }
}

export async function obtenerSerieDeTiempo() {
  const respuesta = await apiClient.get('/forecast', {
    params: {
      latitude: 19.4326,
      longitude: -99.1332,
      hourly: 'temperature_2m',
      forecast_days: 1,
      timezone: 'America/Mexico_City',
    },
  });

  const datos = respuesta.data;

  return datos.hourly.time.map((fecha, indice) => ({
    fecha,
    temperatura: datos.hourly.temperature_2m[indice],
  }));
}
