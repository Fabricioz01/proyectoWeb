// Definimos una función que se llama "reserveSpot (reservar lugar)" y sirve para reservar un lugar en una cuadrícula.
function reserveSpot(spotId) {
  // Seleccionamos el lugar en la cuadrícula con el "spotId" especificado y lo almacenamos en una variable llamada "spot".
  const spot = document.getElementById(spotId);
  // Le agregamos una clase al lugar seleccionado para indicar que está reservado.
  spot.classList.add('reserved');
  // Actualizamos el texto del lugar para mostrar que ha sido reservado y le añadimos un icono de confirmación.
  spot.innerHTML = `Reservado<br><i class="fas fa-check-circle" style="color:#FF6666"></i>`;
  // Mostramos una alerta al usuario para indicar que el lugar ha sido reservado.
  alert(`Lugar ${spotId} reservado`);
}
