require('../libs/angular');

var app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'game',
    'app.controllers',
    'app.directives',
    'app.services',
    'app.factories'
]);
angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);
angular.module('app.factories', []);
app.config(['$urlRouterProvider', '$locationProvider', '$logProvider', '$stateProvider', function($urlProvider, $locationProvider, $logProvider, $stateProvider) {
    $logProvider.debugEnabled(true);
    $urlProvider.otherwise('/');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
            
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
    })
    .state('home', {
    url: '/game',
    templateUrl: 'templates/game.html'
    });
}]);

var game = angular.module('game', [
    'game.controllers',
    'game.directives',
    'game.services',
    'game.factories'
]);
angular.module('game.controllers', []);
angular.module('game.directives', []);
angular.module('game.services', []);
angular.module('game.factories', []);
game.config(['$urlRouterProvider', '$locationProvider', '$logProvider', function($urlProvider, $locationProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);