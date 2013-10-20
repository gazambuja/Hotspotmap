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
        [90, 90],
        [70, 70],
	];

	map.load = function(volgorde){

		if(!volgorde){

			//make map
			map.e = L.map('map').setView([map.lat, map.lon], map.zoom);
			L.tileLayer('http://{s}.tiles.mapbox.com/v3/'+map.getKey()+'/{z}/{x}/{y}.png', {
			    attribution: 'Awesome',
			    minZoom: map.zoom-2,
			    detectRetina: true
			}).addTo(map.e);

			//make jq objects
			map.$ = $('#map');
			map.$c = $('#mapContainer');

			volgorde = 'rust';
		}

		//add markers
		map.markers = new L.LayerGroup();
		$.each(hotspots, function(){
			map.addSpot(this, volgorde);
		});
		map.e.addLayer(map.markers);

		//add legenda
		map.legenda();
	};

	map.addSpot = function(object, volgorde){

		//http://jsfiddle.net/Qh9X5/154/

		//change legenda
		$('#legenda li.active').removeClass('active');
		$('#legenda li.' + volgorde).addClass('active');

		//make icon
		var iconSize = map.getIconSize(object.order[volgorde]);
		var icon = L.icon({
		    iconUrl: 'assets/markers/'+object.image+'.png',

		    iconSize:     [iconSize[0], iconSize[1]], // size of the icon
		    iconAnchor:   [iconSize[0]/2, iconSize[1]/2], // center it
		});

		var marker = L.marker([object.geolocatie[0],object.geolocatie[1]], {
			'icon': icon, 
			riseOnHover: true
		});

		//show details on click
		marker.on("click", function(){ 

			detail.show(object);

			//start inview
			map.e.setView([object.geolocatie[0],object.geolocatie[1]], map.e.getZoom());
			var view = map.e.getBounds();
			var up = view.getSouth();
			var down = view.getNorth();
			var pos = (down-up)*0.20;
			map.e.setView([pos+up,object.geolocatie[1]], map.e.getZoom());
		});

		//add to map
		map.markers.addLayer(marker);

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

	map.legenda = function(){
		$('#legenda li').click(function(){

			//clear
			map.e.removeLayer(map.markers);

			//add again
			$this = $(this);
			map.load($this.attr('rel'));
		});
	}

}())