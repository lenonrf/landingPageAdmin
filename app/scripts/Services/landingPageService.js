'use strict';


angular.module('landingPageAdminApp')
.factory('LandingPageService', 
    function landingPageService() {
        
        this.data;
        var thiz = this;
        
        this.getItems = function(){
         
            var items = [
                
                {
                    nome : 'TESTE HI PHONE',
                    descricao : 'Internet WiFi, Tv, 2 chips, 2 Câmeras, Facebook, desbloqueado.',
                    precoDe : '100,00',
                    precoPara : '99,90'
                },
                {
                    nome : 'TESTE HI PHONE 2',
                    descricao : 'Internet WiFi, Tv, 2 chips, 2 Câmeras, Facebook, desbloqueado.',
                    precoDe : '100,00',
                    precoPara : '99,90'
                },
                {
                    nome : 'TESTE HI PHONE 3',
                    descricao : 'Internet WiFi, Tv, 2 chips, 2 Câmeras, Facebook, desbloqueado.',
                    precoDe : '100,00',
                    precoPara : '99,90'
                }
             ];
                
            console.log('ITEMS', items);
            
            thiz.data = items;
            return thiz.data;
        };
        
        return this;
    }      
);