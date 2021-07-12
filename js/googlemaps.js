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
                streetViewControl:false,
								center: 
								{ lat: 35.465746, lng: 139.622092}
								
							} );
		const tokyomap = {lat : 35.658450658166664, lng:139.7007586504356}
		const yokohamamap = {lat: 35.465746, lng: 139.622092}

    //icon
   
  const icons = {
    building: {
      icon: './img/map-marker-grey.png',
    },
    toilet: {
      icon: './img/map-marker-toilet.png',
    },
    cafe: {
      icon: './img/map-marker-cafe.png',
    },

  };

//Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
						
		
function tokyomapControl(tokyomapcontrolDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginBottom = "6px";
  controlUI.style.textAlign = "center";
  controlUI.style.width = "6rem";
  controlUI.style.height = "2rem";
  controlUI.title = "Click to recenter the Tokyo map";
  tokyomapcontrolDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "1rem";
  controlText.style.lineHeight = "1.8rem";
  controlText.style.paddingLeft = "0px";
  controlText.style.paddingRight = "0px";
  controlText.innerHTML = "Tokyo";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter(tokyomap);
	  map.setZoom(12);
  });
}	
		
function yokohamamapControl(yokohamamapcontrolDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.style.width = "6rem";
  controlUI.style.height = "2rem";	
  controlUI.title = "Click to recenter the Yokohama map";
  yokohamamapcontrolDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "1rem";
  controlText.style.lineHeight = "1.8rem";
  controlText.style.paddingLeft = "0px";
  controlText.style.paddingRight = "0px";
  controlText.innerHTML = "Yokohama";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter(yokohamamap);
	   map.setZoom(12);
  });
}				
	


var gmarkers = [];
	//set marker
	var infowindow = new google.maps.InfoWindow();
  var marker, i;
				
    for (i = 0; i < ndata.length; i++) {  
      marker = new google.maps.Marker({
        id:i,
        position: new google.maps.LatLng(ndata[i]['latitude'], ndata[i]['longitude']),
        icon: {url: icons[ndata[i]['type']].icon, 
               scaledSize: new google.maps.Size(24, 39)
               },
        map,
		    title: (ndata[i]['name']+' / '+ ndata[i]['architect'])
      });
      gmarkers.push(marker);
		
		const contentString =
										
								[ '<div id="content" oncontextmenu="return false" ondragstart="return false" onselectstart="return false">' +
                '<div id="siteNotice">' +
								'</div>'

                 + '<div class="img-box">' 
                 + '<div class="img-copyright">' + '<p>©ho_on.hh</p>' +'</div>'
                 + '<img class="img-thumbnail" src="'+ './img/archidata/' + ndata[i]['name'] +'.jpg' +'" />' 
                 //+ '<button class="btn2" type="button">' +'C'+ '</button>'//
                 +'</div>'
                
								 +'<div h1 id="firstHeading" class="firstHeading">' 
								 + ndata[i]['name'] +'</h1>' + '</div>'
                
								 + '<div id="bodyContent" class="bodyContent">' +
								'<p>Architects : ' + '<b>' + ndata[i]['architect'] + '</b>' +
								'<br>Year : ' + '<b>' + ndata[i]['year'] + '</b>' +
								'<br>Memo : ' + '<b>' + ndata[i]['name'] + '</b>' + " by " + '<b>' + ndata[i]['architect'] + '</b>' + '</p>' +
								 
								'<p>' + '<b>More Detail: </b>'+ '<a href= "' + ndata[i]['sitelink'] + ' "target="_blank">'  + 'Click</a>'  +
                '<br>' + 'Notice: ' + ndata[i]['day'] + 
                '<br>' + 'Book info: ' + '<b>' + ndata[i]['book'] + '</b>' + ' ' + '<a href= "' + ndata[i]['booklink'] + ' "target="_blank">'  + 'Buy</a>' + '<br>'
                + '</p>'

							  +	'</div>'

                + '</div>'
								 
								] 
	
       google.maps.event.addListener(map, 'click', function() {
          infowindow.close();
              });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(contentString + '<b>View in Google Maps: </b>' + "<a target='_blank'" + "href=https://maps.google.com/?q=" + ndata[i]['latitude']+ ',' + ndata[i]['longitude'] + '>'+ 'Click</a>');
          infowindow.open(map, marker);
        }
      })(marker, i));

      gmarkers.push(marker);

      if(marker)
      {
        marker.addListener('click', function() {
          if(map.getZoom() < 15){
            map.setZoom(map.getZoom() + 1);
            map.setCenter(this.getPosition());
          }
          else{
          map.setCenter(this.getPosition());
          }
          });
          gmarkers.push(marker);
        }
    }
   

	// Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  const tokyomapControlDiv = document.createElement("div");
  tokyomapControl(tokyomapControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(tokyomapControlDiv);
		
// Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  const yokohamamapControlDiv = document.createElement("div");
  yokohamamapControl(tokyomapControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(yokohamamapControlDiv);



}
			
