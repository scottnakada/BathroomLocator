'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoBathroomLocatorApp')
        /* Configure a route for this function */
        .config(function ($stateProvider) {
            $stateProvider
                .state('changePass', {
                    url: '/changePass',
                    templateUrl: 'app/userAuth/changePass/changePass.html',
                    controller: 'ChangePassCtrl'
                });
        });

}());
/* Close the IIFE */
