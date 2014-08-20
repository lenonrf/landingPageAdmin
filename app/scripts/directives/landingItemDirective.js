'use strict';

angular.module('landingPageAdminApp')
  .directive('pcLandingItem', function() {

      
      var directiveDefinition = {
        
          restrict : 'E',
          scope : {
            
              data : '='
          
          },
        
          templateUrl: '../../views/templates/landingItem.html'
      };
      
      
      return directiveDefinition;
      
});