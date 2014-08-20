'use strict';


angular.module('landingPageAdminApp')
  .controller('landingPageController', function ($scope, LandingPageService) {    
      
      $scope.dataList = LandingPageService.getItems();      
      
});
