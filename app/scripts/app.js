'use strict';

/**
 * @ngdoc overview
 * @name landingPageAdminApp
 * @description
 * # landingPageAdminApp
 *
 * Main module of the application.
 */
angular
  .module('landingPageAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
      
          
      $routeProvider
      
        .when('/', {
            templateUrl : 'views/login.html',
            controller  : 'login'
        })
      
      
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'login'
        })

      
        .when('/landingpage', {
            templateUrl : 'views/landingpage.html',
            controller  : 'landingPage'
        })
      
      
        .otherwise({
            redirectTo: '/'
        });
  });
