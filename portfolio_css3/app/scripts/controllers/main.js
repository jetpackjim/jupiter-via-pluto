'use strict';

var transitionClass = '';

var myApp = angular.module('portfolioCss3App', ['ngRoute','ngAnimate'])
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

//global event handler  
myApp.run(function($rootScope, $window) {  
      $rootScope.slide = '';  
      $rootScope.$on('$routeChangeStart', function() {  
          //event button to move backward  
          $rootScope.back = function() {  
              $rootScope.slide = 'slide-right';  
              $window.history.back();  
          }  
          //event button item list to move forward  
          $rootScope.next = function() {  
              $rootScope.slide = 'slide-left';  
          }  
      });  
  }); 

/**
 * HACK Do not reload the current template if it is not needed.
 *
 * See AngularJS: Change hash and route without completely reloading controller http://stackoverflow.com/questions/12115259/angularjs-change-hash-and-route-without-completely-reloading-controller
 */
myApp.factory('DoNotReloadCurrentTemplate', ['$route', function($route) {
  return function(scope) {
    var lastRoute = $route.current;
    scope.$on('$locationChangeSuccess', function() {
      if (lastRoute.$$route.templateUrl === $route.current.$$route.templateUrl) {
        console.log('DoNotReloadCurrentTemplate not reloading template: ' + $route.current.$$route.templateUrl);
        $route.current = lastRoute;
      }
    });
  };
}]);


myApp.service('TasksService', function($rootScope) {
  this.setPage = function(pagename)
  {
    $rootScope.$broadcast('SETPAGE_' + pagename, '');
  }
});

function navController($scope, $location, TasksService, DoNotReloadCurrentTemplate) {
    DoNotReloadCurrentTemplate($scope);

    $scope.isActive = function (viewLocation) {
     var current = (viewLocation === $location.path());
     return current;
    };   

    $scope.navClick = function(pagename) {
      TasksService.setPage(pagename);
    }     
};

function pageGroupController($scope) {
  $scope.transitionClass = '';

  $scope.$on('SETPAGE_home', function(response) {
      $scope.transitionClass = 'pagehome';
  });
  $scope.$on('SETPAGE_about', function(response) {
      $scope.transitionClass = 'pageabout';
  });
  $scope.$on('SETPAGE_work', function(response) {
      $scope.transitionClass = 'pagehome';
  });
}

myApp.directive('ngHoverRumbleDropAnim', function() {
  	return {
    	link: function(scope, element) {
    		var animating = false;

       		element.bind('mouseenter touchstart', function() {

       			if ( animating === false )
       			{
       				animating = true;

       				var style = document.documentElement.style;

       				if ( style.webkitTransition !== undefined ||
				        style.MozTransition !== undefined ||
				        style.OTransition !== undefined ||
				        style.MsTransition !== undefined ||
				        style.transition !== undefined )
				    {

	       				element.addClass('rumble');

	  					/*element.css({
	        				transform: 'translate(0px,100px)',
	        				transition: '2s'
	    				});*/

	    				setTimeout(function(){
	             			/*element.css({
		        				transform: 'translate(0px,0px)',
		        				transition: '2s'
	    					});	*/

	    					element.removeClass('rumble');
		             		animating = false;
		             			
	         			}, 2000 );       				
			        }
			        else
			        {
			        	element.animate({
			          		top: "+=100px"
			          	}, 1000 )
			          	element.animate({
			          		top: "-=100px"
			          	}, 1000 )

			          	setTimeout(function(){
	             			animating = false;
	         			}, 2000 );
			        }
		        }
       		})
    	}
 	}
});

myApp.directive('ngHoverRumbleAnim', function() {
  	return {
    	link: function(scope, element) {
    		var animating = false;

       		element.bind('mouseenter touchstart', function() {

       			if ( animating === false )
       			{
       				animating = true;

       				element.addClass('rumble');

/*animation-name: dropdown;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  -webkit-animation-name: dropdown;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: linear;*/

  					element.css({
        				transform: 'translate(0px,100px)',
        				transition: '2s'
    				});

    				setTimeout(function(){
             			element.css({
	        				transform: 'translate(0px,0px)',
	        				transition: '2s'
    					});	
         			}, 2000 );
       				
		          	/*element.animate({
		          		top: "+=100px"
		          	}, 1000 )
		          	element.animate({
		          		top: "-=100px"
		          	}, 1000 )*/

		          	setTimeout(function(){
             			animating = false;
             			element.removeClass('rumble');
         			}, 2000 );
		        }
       		})
    	}
 	}
});
