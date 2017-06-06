function cargarPagina() {
  mostrarRestaurantes(restaurantes);
  $("#buscar").submit(filtrarRestaurante);
  $(".card-panel").click(mostrarMapaComida);

  var verificarCoords = function (e) {
  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(obtenerCoordenadas);
  	} else {
  		console.log("Actualice su navegador");
  	}
  };
  verificarCoords();
}

// Geolocalización
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

// Arreglo de restaurantes o lugares de comida
var restaurantes = [
  {
    nombre: "El Cardenal",
    direccion: "Av. de la Paz Núm. 32, Alvaro Obregon, San Ángel, 01000 Ciudad de México, CDMX",
    latitud: 19.34726165,
    longitud: -99.1888771,
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

// platilla para contener propiedades de cada objeto-restaurante
var plantillaRestaurante = '<div class="row">' +
  '<div class="col s12">' +
      '<div class="card-panel hoverable grey lighten-5 z-depth-1" data-latitud="__latitud__" data-longitud="__longitud__">' +
        '<h5 class="name">__nombre__</h5>' +
        '<p class="black-text">__comida__</p>' +
        '<p class="black-text">__direccion__</p>' +
      '</div>' +
    '</div>' +
  '</div>';

// filtro de restaurantes por medio de input en formulario
var filtrarRestaurante = function (e) {
  e.preventDefault();
  var criterioBusqueda = $("#search").val().toLowerCase();
	var restaurantesFiltrados = restaurantes.filter(function (restaurante) {
	   return restaurante.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
  // console.log(restaurantesFiltrados);
	mostrarRestaurantes(restaurantesFiltrados);
}

// Imprime la lista de restaurantes reemplazando la información desde el arreglo de objeto-restaurante
var mostrarRestaurantes = function (restaurantes) {
  console.log(restaurantes);
  var plantillaRestauranteFinal = "";
  restaurantes.forEach(function (restaurante) {
    plantillaRestauranteFinal += plantillaRestaurante.replace("__nombre__", restaurante.nombre)
    .replace("__comida__", restaurante.comida)
    .replace("__direccion__", restaurante.direccion)
    .replace("__latitud__", restaurante.latitud)
    .replace("__longitud__", restaurante.longitud);
  });
  // muestra la plantilla para cada restaurante al cargar la página
  $(".restaurante").html(plantillaRestauranteFinal);
  // al realizar el filtro también envía al mapa correspondiente
  $(".card-panel").on("click", mostrarMapaComida);
};

// Mostrar mapa del restaurante seleccionado
function mostrarMapaComida() {
  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };
  // llama a la función que muestra la localización del y que ha localizado las coordenadas para generar el mapa correspondiente
  initMap(coordenadas);
}

$(document).ready(cargarPagina);
