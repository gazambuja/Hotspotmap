(function(){
	
	window.menu = {};

	menu.init = function(){
		menu.$ = $('header ul');
		menu.$page = $('#pages');

		//open
		menu.$.find('li').click(function(){
			$this = $(this);
			menu.launch($this.attr('rel'));
			detail.close();
		})

		//close
		menu.$page.find('.close').click(function(){
			menu.close();
		})

	};

	menu.launch = function(name){
		menu.$page.addClass('show');
		map.$c.addClass('menu');
		var $item = menu.$page.find('.' + name);

		if(menu.show){
			//animate when opened
			menu.$page.find('.container').animate({left: -$item.position().left}, 1000);
		} else {
			menu.$page.find('.container').css({left: -$item.position().left});
		}

		menu.show = true;
	}

	menu.close = function(){
		menu.show = false;
		menu.$page.removeClass('show');
		map.$c.removeClass('menu');
	}

}())