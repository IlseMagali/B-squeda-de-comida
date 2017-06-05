// Geolocalizándome
function initMap() {
        var encuentrame = {lat: 19.4176387, lng: -99.1648153};
        var map = new google.maps.Map(document.getElementById("mapa"), {
          zoom: 18,
          center: encuentrame
        });
        var marker = new google.maps.Marker({
          position: encuentrame,
          map: map
        });
      }


// var restaurantes = [
//   {
//     "nombre": "Zapote",
//     "direccion": "Calle Guanajuato 138, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
//     "latitud": "19.416378",
//     "longitud": "-99.16085",
//     "comida": "mediterránea"
//   }
//   {
//     "nombre": "Tamales Doña Emi",
//     "direccion": "Jalapa 278, Benito Juárez, Roma Sur, 06760 Ciudad de México, CDMX",
//     "latitud": "19.4094273",
//     "longitud": "-99.1598699",
//     "comida": "mexicana"
//   }
//
// ];
