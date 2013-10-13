(function(){

	window.main = {};

	//ready to load
	$(document).ready(function(){

		//load map
		map.load();

		//load details
		detail.init();

		//load menu & pages
		menu.init();

	});

	//retina?
	main.retina = window.devicePixelRatio > 1;

})()