'use strict';

angular.module('ionBathroomLocatorApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.bathMap', {
                url: '/bathMap',
                views: {
                    'menuContent': {
                        templateUrl: "bathMap/bathMap.html",
                        controller: 'BathMapCtrl'
                    }
                }
            });
    }
);
