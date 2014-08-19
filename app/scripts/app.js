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
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
      
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
      
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'Home'
        })

        .when('/landingpage', {
            templateUrl : 'views/landingpage.html',
            controller  : 'LandingPage'
        })
      
        .otherwise({
            redirectTo: '/'
        });
  });
