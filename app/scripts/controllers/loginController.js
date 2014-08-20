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

        
        angular.element('#header').hide();
                

        $scope.login = function(){    
            $location.path('/landingpage');        
        };
}]);
