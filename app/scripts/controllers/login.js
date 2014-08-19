'use strict';

/**
 * @ngdoc function
 * @name landingPageAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageAdminApp
 */
angular.module('landingPageAdminApp')
  .controller('Login', function ($scope, $location) {
      
      
      $scope.login = function(){
      
          console.log('loga PESTE !!!')
          $location.path('/landingpage');
      }
      
      
  });
