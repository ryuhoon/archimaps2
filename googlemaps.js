// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap()
	{
	
		// Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
    color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
    color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  }
],
            {name: 'Styled Map'});


							var yokohama = {
								lat: 35.465746,
								lng: 139.622092,
							};
							var windtower = {
								lat: 35.466968,
								lng: 139.621068,
							};
							var gazebo = {
								lat: 35.473900,
								lng: 139.620385,
							};


							const map =
							new google.maps.Map(document.getElementById('map'),
							{
								zoom: 16,
								
								center: yokohama,
							} );

//Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
							
							
							const contentString =
								
								'<div id="content">' +
								'<div id="siteNotice">' +
								'</div>' +
								'<h1 id="firstHeading" class="firstHeading">Yokohama Wind Tower (Toyo Ito)</h1>' +
								'<div id="bodyContent">' +
								'<p> Architects : Toyo ito' +
								'<br>Year : 1986 </p>' +
								'More Detail: <a href="https://archi-ho-onhh.tistory.com/29" target="_blank">' +
								'Click</a>' +
								'</div>' +
								'</div>';

							const contentString2 =
								 
								'<div id="content">' +
								'<div id="siteNotice">' +
								'</div>' +
								'<h1 id="firstHeading" class="firstHeading">Gazebo (Riken yamamoto)</h1>' +
								'<div id="bodyContent">' +
								'<p> Architects : Riken yamamoto' +
								'<br>Year : 1986 </p>' +
								'More Detail: <a href="https://archi-ho-onhh.tistory.com/29" target="_blank">' +
								'Click</a>' +
								'</div>' +
								'</div>';

							const infowindow = new google.maps.InfoWindow({
								content: contentString,
							});

							const infowindow2 = new google.maps.InfoWindow({
								content: contentString2,
							});


							const marker = new google.maps.Marker({
								position: windtower,
								map,
								title: 'Yokohama Wind Tower (Toyo Ito)'
							});

							const marker2 = new google.maps.Marker({
								position: gazebo,
								map,
								title: 'gazebo (Riken Yamamoto)',
							});


							marker.addListener('click', () => {
								infowindow.open(map, marker);
							});

							marker2.addListener('click', () => {
								infowindow2.open(map, marker2);
							});

 
	}
			
