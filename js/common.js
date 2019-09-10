$(function() {

	// header
		var menuSliderSettings = {
			slidesToShow:3,
			slidesToScroll:3,
			dots: false,
			mobileFirst: true,
			touchThreshold: 100,
			// edgeFriction: ,
			// swipeToSlide: true,
			// swipeToSlide: true,
			responsive: [

			{
				breakpoint: 350,
				settings: {

					slidesToShow:3

				}	
			},
			{
				breakpoint: 0,
				settings: {

					slidesToShow:2,
					slidesToScroll:3

				}	
			}
			]
		};

		var hHoptions = {
			offset: $('.header').height(),
			offsetSide: 'top',
			classes: {
				clone:   'banner--clone header--fixed',
				stick:   'banner--stick',
				unstick: 'banner--unstick'
			},
			onStick:   function () {
				
				var $currentStandartHeader = $('.header:not(.banner--clone)');
					
					$currentStandartHeader
					.find('.header-top')
					.removeClass('menu-opened')
					.removeClass('search-opened');

					$currentStandartHeader
						.find('.toggle-mnu')
						.removeClass('on');

					$('.termins-dictionary__content').addClass('termins-dictionary__content--fixed');

			},
			onUnstick:   function () {
				$('.termins-dictionary__content').removeClass('termins-dictionary__content--fixed');
			}

			 // onUnstick: function () {
			 // 		menuHamburgerClose();
			 // }

		};

		var header = new Headhesive('.header', hHoptions);

		$menuSlider = $('.menu-to-slider');


		if(screen.width < 768){
	    	$menuSlider.slick(menuSliderSettings);
			// $menuSlider.slick('reinit');
		}

		$(window).resize(function() {
			if ($(window).width() > 768) {
				if ($menuSlider.hasClass('slick-initialized')) {
					$menuSlider.slick('unslick');
				}
				return
			}

			if (!$menuSlider.hasClass('slick-initialized')) {
				return $menuSlider.slick(menuSliderSettings);
			}
		});


	  $(".toggle-mnu").click(function(e) {
	  	e.stopPropagation();
	    $(this).toggleClass("on");
	    
	    var $th = $(this),
	    	$parentHeader = $th.closest('.header');

	    $parentHeader
	    	.find('.header-top')
	  		.toggleClass('menu-opened');
  		$parentHeader
  			.siblings()
	  		.find('.header-top')
	  		.removeClass('menu-opened');

  		$('.header-top').removeClass('search-opened');
	    
	    return false;
	  });

	  $('.header-mob-buttons__search').click(function(e) {
	  	e.stopPropagation();
	  	var $th = $(this),
	    	$parentHeader = $th.closest('.header');

	    $parentHeader
	    	.find('.header-top')
	  		.toggleClass('search-opened');
  		$parentHeader
  			.siblings()
	  		.find('.header-top')
	  		.removeClass('search-opened');

  		$('.header-top').removeClass('menu-opened');
  		$(".toggle-mnu").removeClass('on');

	  	// $(this).closest('.header')
	  	// 	.toggleClass('search-opened')
	  	// 	.siblings()
	  	// 	.removeClass('search-opened');

	  	return false;
	  });

	  $('.header-search').click(function(e) {
	  	e.stopPropagation();
	  });

	  $('body').click(function(e) {
	  	$('.header-top').removeClass('search-opened');
	  	$('.header-top').removeClass('menu-opened');
	  });

	// end header

	// section banner
		$('.banner-slider').slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			dots: true,
			arrows: false
		});
	// end section banner

	// section visual-menu
		var menuVisualSliderSettings = {
			slidesToShow:1,
			dots: false,
			mobileFirst: true,
			responsive: [

			{
				breakpoint: 576,
				settings: {

					slidesToShow:2

				}	
			}
			]

		};

		$menuVisualSlider = $('.menu-visual__slider');


		if(screen.width < 768){
	    	$menuVisualSlider.slick(menuVisualSliderSettings);
			// $menuSlider.slick('reinit');
		}

		$(window).resize(function() {
			if ($(window).width() > 768) {
				if ($menuVisualSlider.hasClass('slick-initialized')) {
					$menuVisualSlider.slick('unslick');
				}
				return
			}

			if (!$menuVisualSlider.hasClass('slick-initialized')) {
				return $menuVisualSlider.slick(menuVisualSliderSettings);
			}
		});
	// end section visual-menu

	// section tutorials
		$('.tutorials-slider').slick({
			slidesToScroll: 1,
			slidesToShow: 3,
			// mobileFirst:true,
			responsive: [
			
			{
				breakpoint: 1200,
				settings: {
					
					slidesToShow: 2

				}	
			},
			{
				breakpoint: 993,
				settings: {
					
					slidesToShow: 1

				}	
			},
			// {
			// 	breakpoint: 992,
			// 	settings: {
					
			// 		slidesToShow: 2

			// 	}	
			// },
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1

				}	
			}
			]
		});

	
	// end section tutorials

	// section top
		var topSliderOpt = {
			slidesToShow:1,
			dots: false,
			mobileFirst: true
		}
		$menutopSlider = $('.top .books-content');

		if(screen.width < 480){
	    	$menutopSlider.slick(topSliderOpt);

		}

		$(window).resize(function() {
			if ($(window).width() > 480) {
				if ($menutopSlider.hasClass('slick-initialized')) {
					$menutopSlider.slick('unslick');
				}
				return
			}

			if (!$menutopSlider.hasClass('slick-initialized')) {
				return $menutopSlider.slick(topSliderOpt);
			}
		});

	// end section top

	// pul-filter
		$('.pul-filter__mob-title').click(function() {
			$(this).closest('.bp-filter-to-toggle')
				.toggleClass('opened');
			$( ".bp-form__select" ).selectmenu( "refresh" );
		});
	// end pul-filter

	// tabs
		var $tabs = $('.tabs__link');

		$tabs.on('click', function(e) {
			e.preventDefault();
			var $th = $(this),
				$href = $th.attr('href'),
				$parent = $th.parent(),
				$parentTabs = $th.closest('.tabs');

			$tabs.each(function(ind, elem) {
				if($(elem).attr('href') !== $href){
					$(elem).parent().removeClass('tabs__item--active');
				}else{
					$(elem).parent().addClass('tabs__item--active');
				}
			});
				
			$parentTabs.find($href).removeClass('hidden')
				.siblings()
				.addClass('hidden');
		});

	// end tabs

	// custom selects
		$( ".bp-form__select" ).selectmenu({
			width: $(this).closest('.bp-form__label').width(),
			position: { my : "left top+50", at: "left top" },
			 create: function( event, ui ) {
			 	// console.log(event);
			 	// console.log(ui);
			 	// console.log(this);
			 	// console.log($(this).closest('.bp-form__label').width());
			 }
		});

		$(window).resize(function() {
			$( ".bp-form__select" ).selectmenu( "refresh" );
		});

	// end custom selects

	// datepicker

		$('.picked-input').datepicker({
			onShow: function(inst, animationCompleted) {
				// console.log(inst.el.offsetWidth);
				var elWidth = inst.el.offsetWidth;

				inst.$datepicker
					.find('.datepicker--pointer')
					.css('left', elWidth - 20 + 'px');
				console.log(inst.$datepicker.find('.datepicker--pointer').attr('class'));
			}
		});


	// end datepicker

	// section training-top
		if(document.querySelector('.training-sidebar--with-dropdown .training-prices__main') !== null){

			$('.training-sidebar--with-dropdown .training-prices__main').on('click', function() {
				console.log('prices click');
				$(this)
				.closest('.training-prices__inner')
				// .find('.training-prices__list')
				.toggleClass('opened');
			});

			
		}
	// end section training-top

	// section training-tabs
		var ttOpts = {
			slidesToShow: 1,
			dots: false,
			mobileFirst: true,
			responsive: [

			{
				breakpoint: 600,
				settings: {

					slidesToShow:2

				}	
			}
			]
		};

		var $ttSlider = $('.training-tabs .tabs__list');

		if(screen.width < 768){
	    	$ttSlider.slick(ttOpts);

		}

		$(window).resize(function() {
			if ($(window).width() > 768) {
				if ($ttSlider.hasClass('slick-initialized')) {
					$ttSlider.slick('unslick');
				}
				return
			}

			if (!$ttSlider.hasClass('slick-initialized')) {
				return $ttSlider.slick(ttOpts);
			}
		});

	// end section training-tabs

	// section photo-slider
		$('.photo-slider').slick({
			slidesToScroll: 1,
			slidesToShow: 3,
			responsive: [
			
			{
				breakpoint: 769,
				settings: {
					
					slidesToShow: 2

				}	
			},
			{
				breakpoint: 577,
				settings: {
					
					slidesToShow: 1

				}	
			}
			]
		});
	// end section photo-slider

	// section termins-dictionary
		$('.termins-dictionary__sort ul li').click(function() {
			$(this).addClass('active')
				.siblings()
				.removeClass('active');
		});

		function dictionaryScroll() {
			var $alphaberButtons = $('.termins-dictionary__alphabet li a'),
				_self = this,
				$dictionaryBlocks = $('.dictionary-block');
			
			this.init = function(){
				this.events();
			},

			this.events = function() {
				$alphaberButtons.on('click', this.alphabetClick);
			},

			this.alphabetClick = function(e) {
				var $th = $(this),
					thatAlphabetLetter = $th.text();
	
				if(_self.letterIndexCheck(_self.letterCheck(thatAlphabetLetter)[1]) == true){
					_self.scrollToLetter(_self.letterCheck(thatAlphabetLetter)[1]);
					
					$th
						.parent()
						.addClass('active')
						.siblings()
						.removeClass('active');
				}
				
				return false;
			},

			this.letterCheck = function(letter) {
				var arr = [];

					console.log(letter);

				$dictionaryBlocks.each(function(ind, elem) {

					arr.push(elem.querySelector('.dictionary-block__letter').innerText.toLowerCase());
				});

				return [arr.indexOf(letter) != -1, arr.indexOf(letter)];
			},

			this.letterIndexCheck = function(returnedIndex) {
				if(returnedIndex == -1){
					return false;
				}
				return true;
			},

			this.scrollToLetter = function(letterIndex) {
				console.log(letterIndex);
				
				var top = $dictionaryBlocks.eq(letterIndex).offset().top,
					minus, 
					luft;
					console.log('minus = ' + minus);

				if(screen.width > 768){
					minus = 105; 
				}else{
					minus = 70;

				}
				luft = top - $('.header:not(.banner--clone)').height() + minus;

				$('html, body').animate({scrollTop: luft}, 800);

				console.log('top= ' + top);
			}

		}
		
		if(document.querySelector('.termins-dictionary__content') !== null){
			var alphabet = new dictionaryScroll;
			alphabet.init();
			
		}

		if(document.querySelector('.scroll-pane')){
			var scrollPane = $('.scroll-pane').jScrollPane({
				verticalDragMaxHeight : 16,
				animateScroll : true,
				resizeSensor: true,
				// contentWidth: 40 ,
				// verticalGutter: 100,
				// autoReinitialise: true
			});

			var scrollPaneApi = scrollPane.data('jsp');

			scrollPaneApi.reinitialise();

			$(window).resize(function() {
				scrollPaneApi.reinitialise();
			});
			
		}
	// end section termins-dictionary

	// section forward
		var forwardSlider = $('.forward-computer__slider').slick({
			// fade: true
			arrows: false,
			draggable: false,
			swipe: false,
			touchMove: false,
			responsive: [

			{
				breakpoint: 769,
				settings: {

					fade: true

				}	
			}
			]

		});

		$('.forward-map svg .part').click(function() {
			// forward($(this).index() -1 );
			console.log(this.classList.contains('standactive'));
			console.log(this);
		});
		
		$('.forward-map .forward-map__icon').click(function(e) {
			forward($(this).index() - 2);
			console.log('icon index ' + ($(this).index() - 2));
		});

		$('.forward-map .forward-map__icon').hover(function(e) {
			$('.forward-map svg path')
				.eq(($(this).index() - 2))
				.not('.standactive')
				.attr('class', 'part active');
			
			$(this)
				.addClass('active');
			},

			function(e) {

				$('.forward-map svg path')
					.eq(($(this).index() - 2))
					.not('.standactive')
					.attr('class', 'part');
		});

		$('.forward-map svg path').hover(function() {
				console.log('svg path hover!');
				$('.forward-map .forward-map__icon')
					.eq($(this).index() -1 )
					.addClass('active');

			},

			function() {
				if(this.classList.contains('standactive')){
					console.log("condition yes");
					return false;
				}
				
				$('.forward-map .forward-map__icon')
				.eq($(this).index() - 1)
				.removeClass('active');
		});

		function forward(ind) {
			$('.forward-map svg path').eq(ind)
				// .css('fill', '#fff')
				.attr('class', 'part active standactive')
				.siblings()
				.attr('class', 'part')
				// .css('fill', '#005096')

			$('.forward-map__icon').eq(ind)
				.addClass('active')
				.siblings()
				.removeClass('active');

			$('.forward-diagram__title').eq(ind)
				.addClass('active')
				.siblings()
				.removeClass('active');

			forwardSlider.slick('slickGoTo', ind);
		}

	// end section forward

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
