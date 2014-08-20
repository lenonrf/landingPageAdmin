'use strict';

/**
 * @ngdoc function
 * @name landingPageAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageAdminApp
 */
angular.module('landingPageAdminApp')
.controller('loginController',[ '$scope', '$location',
    function ($scope, $location) {
      
        console.log('login', $location);

        $scope.login = function(){
        
            console.log('loga PESTE !!!');
            $location.path('/landingpage');
        
        };

}]);
