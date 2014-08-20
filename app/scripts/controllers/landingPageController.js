'use strict';

/**
 * @ngdoc function
 * @name landingPageAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageAdminApp
 */
angular.module('landingPageAdminApp')
  .controller('landingPageController', function ($scope) {
      
      console.log('landingPage');    
      
      $scope.data = {
          nome : 'TESTE HI PHONE',
          descricao : 'Internet WiFi, Tv, 2 chips, 2 Câmeras, Facebook, desbloqueado.',
          precoDe : '100,00',
          precoPara : '99,90'
      };
      
  });
