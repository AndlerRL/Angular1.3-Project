'use strict';

var bikeAppCtrl= angular.module('bikeAppCtrl', []);

bikeAppCtrl.controller('ctrlInicio', ['$scope', 'Bike',
	function($scope, Bike,) {
		$scope.bikes= Bike.query();
		$scope.orderProp= 'model';
		$scope.reverse= false;
		$scope.home= {
			"img": [
				"img/inicio1.jpg",
				"img/inicio2.jpg",
				"img/inicio3.jpg",
				"img/inicio4.jpg",
				"img/inicio5.jpg",
				"img/inicio6.jpg"
			]
		};
		$scope.setHomeImg= function(img) {
			$scope.mainImageUrl= img;
 		}
}]);

bikeAppCtrl.controller('ctrlDetails',
	['$scope', '$routeParams', 'Bike', function($scope, $routeParams, Bike) {
		$scope.orderProp= 'year';
		$scope.bike= Bike.get({bikeId: $routeParams.bikeId}, function(bike) {
			$scope.mainImageUrl= bike.images[0];
		});

		$scope.setImages= function(imageUrl) {
			$scope.mainImageUrl= imageUrl;
	}
}]);