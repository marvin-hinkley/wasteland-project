angular.module('application').directive('gameWindow', ['$window', '$injector', function($window, $injector){
    var linkFn = function(scope, ele, attrs) {
//        require('./Game.js')(
//            scope,
//            scope.players,
//            scope.mapId,
//            $injector
//        );
        var game = new Phaser.Game(640, 640, Phaser.CANVAS, 'game-window', { preload: preload, create: create });
        
        function preload () {
            this.load.tilemap('level1', 'assets/tilemaps/testMap.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles1', 'assets/tilemaps/dungeonTiles.gif');
            this.load.image('tiles2', 'assets/tilemaps/moreDungeonTiles.gif');
        }
        function create () {
            this.map = this.game.add.tilemap('level1');
            this.map.addTilesetImage('dungeonTiles', 'tiles1');
            this.map.addTilesetImage('moreDungeonTiles', 'tiles2');
            
            this.backgroundlayer = this.map.createLayer('backgroundLayer');
            this.blockedLayer = this.map.createLayer('blockedLayer');
            this.backgroundlayer.resizeWorld();
            this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');
        }
        
        scope.$on('$destroy', function(){
            game.destroy();
        });

    };
    
    return {
        restrict: 'E',
        template: '<div id="game-window" class="grid-content vertical"></div>',
        scope: {},
        link: linkFn,
        compile: function(iEle, iAttrs) {
            return linkFn;
        }
    };
}]);