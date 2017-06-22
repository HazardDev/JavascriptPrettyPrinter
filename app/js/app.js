/**
 * Created by jewsofhazard on 7/14/16.
 */

var app = angular.module('jsonPrettyApp', ['ngPrettyJson']);

app.controller('jsonPrettyController', ['$scope', '$http', '$log', function($scope, $http, $log){

	$scope.ui = {jsonUrl: "JSON Url or Data Here", jsonObject: ""};

	$scope.prettyPrint = function(){

		$log.info($scope.ui.jsonUrl);

		$http.get($scope.ui.jsonUrl).then(function(response){
			$scope.ui.jsonObject = response;
		});


		// var regexPattern = new RegExp("^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$`");
		//
		// if(regexPattern.test($scope.ui.jsonUrl)){
		// 	$http.get($scope.ui.jsonUrl).then(function(response){
		// 		$scope.ui.jsonObject = response;
		// 	});
		// } else {
		// 	$scope.ui.jsonObject = $scope.ui.jsonUrl;
		// }


	}

}]);