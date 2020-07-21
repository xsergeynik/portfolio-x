
//Scroll #
$(document).ready(function () {
	$('a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600)
	});
});

//Gallery
$(document).ready(function() {
	$('.news__gallery1').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Premier "Металлоконструкции"</small>';
			}
		}
	});
});

$(document).ready(function() {
	$('.news__gallery2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Premier "Металлоконструкции"</small>';
			}
		}
	});
});
$(document).ready(function() {
	$('.news__gallery3').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Premier "Металлоконструкции"</small>';
			}
		}
	});
});
$(document).ready(function() {
	$('.news__gallery4').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Premier "Металлоконструкции"</small>';
			}
		}
	});
});


var items = $('.news__wrapper').find('.news__item');
    var itemsCount = items.length;
    $(items).addClass('d-none');

    var page = 1;
    var itemsPerPage = 3;

    function showProducts() {
        var visibleItems = 0;
        items.each(function (index) {
            if (index < itemsPerPage * page) {
                $(this).addClass('d-block');
            }


            if ($(this).hasClass('d-block')) visibleItems++;
            if (visibleItems === itemsCount) $('.show-btn').hide();
        });
    }

    showProducts();


    $('.news__btn').click(function () {
        page++;

	showProducts();
	})


//Burger-Index.html
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav').toggleClass('active');$('.header__burger');
		$('body').toggleClass('lock');
	});
	$('.menu__item a, .header__btn_resp').click(function(event) {
		$('.header__burger,.header__nav').removeClass('active');
		$('body').removeClass('lock');
			});
	});

//Burger-Others
$(document).ready(function(){
	$('.header__burger_two').click(function(event){
		$('.header__burger_two,.menu_two').toggleClass('active');$('.header__burger_two');
		$('body').toggleClass('lock_two');
	});
	$('.menu__item a, .header__btn_resp').click(function(event) {
		$('.header__burger_two,.menu_two').removeClass('active');
		$('body').removeClass('lock_two');
			});
	});