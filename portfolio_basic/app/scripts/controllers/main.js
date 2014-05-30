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
            controller: 'mainController'
      })

      // about page
      .when('/about', {
        templateUrl: 'views/about.html',
            controller: 'aboutController'
      })

      // work page
      .when('/work', {
        templateUrl: 'views/work.html',
            controller: 'workController'
      })

      // skills page
      .when('/skills', {
        templateUrl: 'views/skills.html',
            controller: 'skillsController'
      })

      // contact page
      .when('/contact', {
        templateUrl: 'views/contact.html',
            controller: 'contactController'
      });

});


// CONTROLLERS ============================================
// home page controller
myApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
myApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// work page controller
myApp.controller('workController', function($scope) {
    $scope.pageClass = 'page-work';
});

// skills page controller
myApp.controller('skillsController', function($scope) {
    $scope.pageClass = 'page-skills';
});

// contact page controller
myApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

myApp.controller('headerController', function($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});