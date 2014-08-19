'use strict';

/**
 * @ngdoc function
 * @name landingPageAdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the landingPageAdminApp
 */
angular.module('landingPageAdminApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
