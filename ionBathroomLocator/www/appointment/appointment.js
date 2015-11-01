'use strict';

angular.module('ionBathroomLocatorApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.appointment', {
                url: '/appointment/:id',
                views: {
                    'menuContent': {
                        templateUrl: "appointment/appointment.html",
                        controller: 'AppointmentCtrl'
                    }
                }
            });
    }
);
