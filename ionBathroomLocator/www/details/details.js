'use strict';

angular.module('ionBathroomLocatorApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.details', {
                url: '/details/:id',
                views: {
                    'menuContent': {
                        templateUrl: "details/details.html",
                        controller: 'DetailsCtrl'
                    }
                }
            });
    }
);
