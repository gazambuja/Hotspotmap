(function(){

	window.map = {};

	//settings
	map.lat = 52.13348804077147;
	map.lon = 5.27069091796875;
	map.zoom = 8

	map.load = function(){
		map.e = L.map('map').setView([map.lat, map.lon], zoom);
		L.tileLayer('http://{s}.tile.cloudmade.com/API-key/997/256/{z}/{x}/{y}.png', {
		    attribution: 'Awesome',
		    maxZoom: 18
		}).addTo(map.e);
	};

})())