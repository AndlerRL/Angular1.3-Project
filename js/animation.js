var bikeAppAnimations= angular.module('bikeAppAnimations', ['ngAnimate']);

bikeAppAnimations.animation('.bike', function() {
	var animateUp= function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position: 'relative',
			left: 600,
			display: 'block'
		});
		jQuery(element).animate({
			left: 0
		}, done);
		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		}
	}

	var animateDown= function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position: 'absolute',
			display: 'none',
			left: 0
		});
		jQuery(element).animate({
			left: -600
		}, done);
		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		}
	}

	return {
		addClass: animateUp,
		removeClass: animateDown
	};
});

bikeAppAnimations.animation('.Home', function() {
	var homeUp= function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position: 'relative',
			top: 600,
			left: 0,
			display: 'block'
		});
		jQuery(element).animate({
			top: 0
		}, done);
		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		}
	}

	var homeDown= function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position: 'absolute',
			left: 0,
			display: 'none'
		});
		jQuery(element).animate({
			top: -600,
		}, done);
		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		}
	}

	return {
		addClass: homeUp,
		removeClass: homeDown
	};
});
