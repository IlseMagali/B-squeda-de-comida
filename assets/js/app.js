window.addEventListener("load", cargarPagina);

function cargarPagina() {
  var verificarCoords = function (e) {
  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(obtenerCoordenadas);
  	} else {
  		console.log("Actualice su navegador");
  	}
  };
  verificarCoords();
}
// Geolocalizándome
function obtenerCoordenadas(posicion) {
  var coordenadas = {
		lat: posicion.coords.latitude,
		lng: posicion.coords.longitude
	};
	initMap(coordenadas);
}

function initMap(coordenadas) {

  var map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 18,
    center: coordenadas
  });

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}

var restaurantes = [
  {
    nombre: "El Cardenal",
    direccion: "Av. de la Paz Núm. 32, Alvaro Obregon, San Ángel, 01000 Ciudad de México, CDMX",
    latitud: 19.34692,
    longitud: -99.1887497,
    comida: "mexicana"
  },
  {
    nombre: "Fonda Mexicana",
    direccion: "Avenida Montevideo 279, Gustavo A. Madero, Lindavista",
    latitud: 19.4901029,
    longitud: -99.1309569,
    comida: "mexicana"
  },
  {
    nombre: "El Japonez",
    direccion: 'Av. Vicente Suarez 42A, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX,',
    latitud: 19.4111767,
    longitud: -99.1749857,
    comida: "japones"
  },
  {
    nombre: "Zapote",
    direccion: "Calle Guanajuato 138, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
    latitud: 19.416378,
    longitud: -99.16085,
    comida: "mediterránea"
  },
];
