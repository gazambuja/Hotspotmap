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

		//naam
		var plaats = object.plaats;
		var lidwoord = plaats.split(' ')[0];
		plaats = plaats.substr(plaats.indexOf(" ") + 1);

		//title
		detail.$.find('h3').html(lidwoord + ' <span>' + plaats + '</span> van Nederland');

		//addres
		detail.$.find('.adres .text').text(object.postcode);

		//text
		detail.$.find('div.text').text(object.tekst);

		//image
		detail.$.find('.icon-large').css('background-image', 'url(assets/' + object.image + '.svg)');
	}

	detail.close = function(){
		map.$c.removeClass('detail');
		detail.$.removeClass('show');
	}

})()