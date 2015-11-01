'use strict';

angular.module('yoBathroomLocatorApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'firebase',
    'toaster',
    'angularMoment',
    'ngGeolocation',
    'ngMap'
])

    // Define the constant which defines the Firebase database for this project
    .constant('FURL', 'https://foodflag.firebaseio.com/')

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/home');

        $locationProvider.html5Mode(true);
    });
