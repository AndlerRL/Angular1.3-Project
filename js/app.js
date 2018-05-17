'use strict';

var bikeApp= angular.module('bikeApp', [
	'ngRoute', 'bikeAppAnimations', 'bikeAppCtrl', 'bikeAppServices'
	]);

bikeApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './nav/home.html',
		controller: 'ctrlHome'
	}).when('/bikes/:bikeId', {
		templateUrl: './nav/bikesDetails.html',
		controller: 'ctrlDetails'
	}).otherwise({
		redirectTo: '/'
	})
}]);