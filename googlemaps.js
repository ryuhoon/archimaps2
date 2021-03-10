function initMap()
	{
	
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


							const map =
							new google.maps.Map(document.getElementById('map'),
							{
								zoom: 12,
								mapTypeControl: false,
								center:
								{ lat: 35.465746, lng: 139.622092}
							} );

//Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
							
							

	var infowindow = new google.maps.InfoWindow();
    var marker, i;
		
    for (i = 0; i < ndata.length; i++) {  
      marker = new google.maps.Marker({
        id:i,
        position: new google.maps.LatLng(ndata[i]['latitude'], ndata[i]['longitude']),
        map,
		title: (ndata[i]['name']+' / '+
		  ndata[i]['architect'])
      });
		
		const contentString =
								
		
								[ '<div id="content">' +
								'<div id="siteNotice">' +
								'</div>' 
								 
								 +'<h1 id="firstHeading" class="firstHeading">' 
								 + ndata[i]['name'] +'</h1>'
								 
								 + '<div id="bodyContent">' +
								'<p> Architects : ' + ndata[i]['architect'] + 
								'<br>Year : ' + ndata[i]['year'] +
								'<br>Memo : ' + ndata[i]['name'] +" by "+ ndata[i]['architect'] + '</p>' +
								 
								'More Detail: '+ '<a href= "' + ndata[i]['sitelink'] + ' "target="_blank">'  + 
								'Click</a>' +
								'</div>' +
								'</div>'
								 
								] 
	
	
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(contentString + ndata[i]['day'] );
          infowindow.open(map, marker);
        }
      })(marker, i));
		
      if(marker)
      {
        marker.addListener('click', function() {
          map.setZoom(14);
          map.setCenter(this.getPosition());
        });
        }
    }
		
		
}
			
