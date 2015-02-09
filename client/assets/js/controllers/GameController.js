angular.module('application').controller('GameController', ['$scope', function ($scope) {
    $scope.test = 'TESTING';
    $scope.character = {
        name: 'Madhouse',
        race: 'Half-Orc',
        job: 'Thief',
        intelligence: 30,
        health: 100,
        agility: 54
    };
    $scope.game = {
        name: 'The Darkest Dungeon',
        gameMaster: 'Klieg',
        players: [
            {
                name: 'Jordan Miskowitz',
                character: {
                    name: 'Jorag',
                    race: 'Elf',
                    job: 'Ranger',
                    intelligence: 30,
                    health: 100,
                    agility: 54
                }
            },
            {
                name: 'Albus Johnson',
                character: {
                    name: 'Muffalo',
                    race: 'Half-Elf',
                    job: 'Arcane Mage',
                    intelligence: 30,
                    health: 100,
                    agility: 54
                }
            },
            {
                name: 'Jordan Miskowitz',
                character: {
                    name: 'Glorg the Destroyer',
                    race: 'Dragonkin',
                    job: 'Barbarian',
                    intelligence: 30,
                    health: 100,
                    agility: 54
                }
            }
        ]
    };
}]);