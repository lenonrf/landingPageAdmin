'use strict';

/**
 * @ngdoc function
 * @name landingPageAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageAdminApp
 */
angular.module('landingPageAdminApp')
  .controller('homeController', function ($scope, $location) {
      
      
      console.log('passei na home');
      $location.path('/login');
      
});
