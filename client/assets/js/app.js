(function () {
    'use strict';

    angular.module('application', [
    'ui.router',
    'ngAnimate',
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    'game'
  ]).config(config).run(run);
    
    angular.module('game', []);

    config.$inject = ['$urlRouterProvider', '$locationProvider', '$logProvider'];

    function config($urlProvider, $locationProvider, $logProvider) {
        $logProvider.debugEnabled(true);
        $urlProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
    };

    function run() {
        FastClick.attach(document.body);
    };
    
})();