import {Element} from "./db.mjs"


async function buscarElementosCercanos(req, res) {
  const latitude =parseFloat( req.query.latitude); // Obtén la longitud y latitud de la ubicación
  const longitude =parseFloat( req.query.longitude); // Obtén la longitud y latitud de la ubicación
/* tiene que ser float pq sino pierod decimales */
    try {
      const elementos = await Element.findAll();
  
      // Filtra los elementos a menos de 10 km (10,000 metros)
      const elementosCercanos = elementos.filter(elemento => {
        const distancia = calcularDistancia(elemento.longitude, elemento.latitude, longitude, latitude);
        return distancia <= 10;
      });
  
      res.json(elementosCercanos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ha ocurrido un error al buscar los elementos cercanos.' });
    }
  }
  
  
  // la fórmula HAVERSINE 
function calcularDistancia(longitud1, latitud1, longitud2, latitud2) {
    const radioTierra = 6371; // Radio promedio de la Tierra en kilómetros
  
    const dLat = degToRad(latitud2 - latitud1);
    const dLon = degToRad(longitud2 - longitud1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(latitud1)) * Math.cos(degToRad(latitud2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distancia = radioTierra * c;
  
    return distancia;
  }
  
  // Función para convertir grados a radianes
  function degToRad(grados) {
    return grados * (Math.PI / 180);
  }
  
  
  


export {
    buscarElementosCercanos
  };