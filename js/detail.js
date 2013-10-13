(function(){
	
	window.detail = {};

	detail.init = function(){
		detail.$ = $('#detail');

		//close button
		detail.$.on('click', '.close', function(){
			detail.close();
		});

		//back on map
		map.$c.click(function(){
			if($(this).hasClass('detail')){
				detail.close();
			}
		});
	}

	detail.show = function(object){
		map.$c.addClass('detail');
		detail.$.addClass('show');

		detail.$.find('h3').html('Het <span>' + object.Plaats + '</span> van Nederland');
	}

	detail.close = function(){
		map.$c.removeClass('detail');
		detail.$.removeClass('show');
	}

})()