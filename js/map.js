(function(){

	window.map = {};

	//settings
	map.lat = 52.13348804077147;
	map.lon = 5.27069091796875;
	map.zoom = 8
	map.iconSizes = [
		[175, 175],
		[130, 130],
		[110, 110],
		[70, 70],
		[45, 45]
	];

	map.load = function(){
		map.e = L.map('map').setView([map.lat, map.lon], map.zoom);
		L.tileLayer('http://{s}.tiles.mapbox.com/v3/'+map.getKey()+'/{z}/{x}/{y}.png', {
		    attribution: 'Awesome',
		    maxZoom: map.zoom+2,
		    detectRetina: true
		}).addTo(map.e);

		map.$ = $('#map');
		map.$c = $('#mapContainer');

		$.each(hotspots, function(){
			map.addSpot(this);
		});
	};

	map.addSpot = function(object){

		var iconSize = map.getIconSize(object.order.rust);
		var icon = L.icon({
		    iconUrl: 'assets/marker.png',

		    iconSize:     [iconSize[0], iconSize[1]], // size of the icon
		    iconAnchor:   [iconSize[0]/2, iconSize[1]/2], // center it
		});

		var marker = L.marker([object.Geolocatie[0],object.Geolocatie[1]], {
			'icon': icon, 
		});

		//show details on click
		marker.on("click", function(){ 
			detail.show(object);
		});

		//add to map
		marker.addTo(map.e);

	};

	map.getKey = function(){
		var key = 'dpwoert.map-aju8rza9';
		var keyRetina = 'dpwoert.map-hs95khpx';

		return main.retina ? keyRetina : key;
	}

	map.getIconSize = function(nr){
		if(nr - 1 < map.iconSizes.length){
			return map.iconSizes[nr-1];
		} else {
			//return lastest [smallest]
			return map.iconSizes[map.iconSizes.length-1];
		}
	}

}())