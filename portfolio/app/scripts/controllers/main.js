'use strict';

var portfolioApp = angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


 // routes configuration
portfolioApp.config(function($routeProvider){
	$routeProvider
	// .when('/about',{
	// 	templateUrl: 'views/about.html',
	// 	//controller: 'spAboutController'
	// })
	// .when('/skills',{
	// 	templateUrl: 'views/skills.html',
	// 	//controller: 'spContactController'
	// })
	// .when('/work',{
	// 	templateUrl: 'views/work.html',
	// 	//controller: 'spContactController'
	// })
	// .when('/fun',{
	// 	templateUrl: 'views/fun.html',
	// 	//controller: 'spContactController'
	// })
	// .when('/contact',{
	// 	templateUrl: 'views/contact.html',
	// 	//controller: 'spContactController'
	// })
	// .otherwise({
	// 	redirectTo: '/about',
		
	// });
	
	
});

function NavbarController($scope, $location)
{
	$scope.isActive = function(viewLocation) {
		return viewLocation == $location.path();
	}
}