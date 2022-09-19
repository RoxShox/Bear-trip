const sliders = {
	1: {
		classname: '.slider__direction',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			fade: true,
			arrows: false,
			// autoplay: true,
			// autoplaySpeed: 2000,
		}
	},
	2: {
		classname: '.slider__relax',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			fade: true,
			arrows: false,
			// autoplay: true,
			// autoplaySpeed: 2000,
		}
	},
	3: {
		classname: '.slider__excursion',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			fade: true,
			arrows: false,

			// autoplay: true,
			// autoplaySpeed: 2000,
		}
	},
	4: {
		classname: '.slider__excursion-w2',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			fade: true,
			arrows: false,
			// autoplay: true,
			// autoplaySpeed: 2000,
		}
	},
	5: {
		classname: '.gallery__photo-slider',
		options: {

			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			fade: true,
		}
	},
	6: {
		classname: '.gallery__mobile-video-slider',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			fade: true,
		}
	}
}

function initSlider(classname, options) {
	if (classname && options) {
		$(classname).slick(options);
	} else {
		throw "Ошибка, нет класса или свойств для слайдера";
	}
}

function destroySlider(classname = '') {
	$(classname).slick('unslick');
}