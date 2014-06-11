'use strict';

var transitionClass = '';

var myApp = angular.module('portfolioBasicApp', ['ngRoute','ngAnimate'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



myApp.config(function($routeProvider) {

    $routeProvider
      // home page
      .when('/', {
        templateUrl: 'views/main.html',
            // controller: 'mainController',
            animate: "page-contact"
      })

      // about page
      .when('/about', {
        templateUrl: 'views/about.html',
            // controller: 'aboutController',
            animate: "page-contact"
      })

      // work page
      .when('/work', {
        templateUrl: 'views/work.html',
            // controller: 'workController',
            animate: "page-contact"
      })

      // skills page
      .when('/skills', {
        templateUrl: 'views/skills.html',
            // controller: 'skillsController',
            animate: "page-contact"
      })

      // contact page
      .when('/contact', {
        templateUrl: 'views/contact.html',
            // controller: 'contactController',
            animate: "page-contact"
      });

});


// CONTROLLERS ============================================
// home page controller
// myApp.controller('mainController', function($scope) {
//     $scope.pageClass = 'page-home';
// });

// // about page controller
// myApp.controller('aboutController', function($scope) {
//     //console.log("page-about");
//     $scope.pageClass = 'page-about';
// });

// // work page controller
// myApp.controller('workController', function($scope) {
//     $scope.pageClass = 'page-work';
// });

// // skills page controller
// myApp.controller('skillsController', function($scope) {
//     $scope.pageClass = 'page-skills';
// });

// // contact page controller
// myApp.controller('contactController', function($scope) {
//     $scope.pageClass = 'page-contact';
// });

myApp.controller('headerController', function($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});


myApp.controller('ContactCtrl', function($scope, $http) {
  $scope.success = false;
  $scope.httpError = false;
  
  $scope.send = function() {
    var job = { job: { klass: 'msg', args: [$scope.msg]}};
    $.ajax({
		url:"contact.php",
		type: 'post',
		data:  job,
		success:function(result)
		{
		}
	});


   /* $http.post('contact.php',job).
      success(function(data){
        $scope.success = true;
        $scope.msg = {};
      }).
      error(function(data){
        $scope.httpError = true;
      })*/;
  }
})


myApp.directive('animClass',function($route){
  return {
    link: function(scope, elm, attrs){
      var enterClass = $route.current.animate;
      elm.addClass(enterClass);
      scope.$on('$destroy',function(){
        elm.removeClass(enterClass);
        elm.addClass($route.current.animate);
      })
    }
  }
});