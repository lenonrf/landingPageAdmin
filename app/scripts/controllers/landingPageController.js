'use strict';


angular.module('landingPageAdminApp')
  .controller('landingPageController', function ($scope, LandingPageService) {    
            
      angular.element('#header').show();

      $scope.dataList = LandingPageService.getItems();      
      
});
