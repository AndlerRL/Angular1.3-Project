'use strict';

var bikeApp= angular.module('bikeApp', [
	'ngRoute', 'bikeAppAnimations', 'bikeAppCtrl', 'bikeAppServices'
	]);

bikeApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/bikes', {
		templateUrl: 'nav/inicio.html',
		controller: 'ctrlInicio'
	}).when('/bikes/:bikeId', {
		templateUrl: 'nav/bikesDetails.html',
		controller: 'ctrlDetails'
	}).otherwise({
		redirectTo: '/bikes'
	});
}]);