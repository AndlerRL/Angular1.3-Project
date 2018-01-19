'use strict';

var bikeAppServices= angular.module('bikeAppServices', ['ngResource']);

bikeAppServices.factory('Bike', ['$resource',
	function($resource) {
		return $resource('bikes/:bikeId.json', {}, {
			query: {method:'GET', params:{bikeId:'bikes'}, isArray: true}
		});
}]);