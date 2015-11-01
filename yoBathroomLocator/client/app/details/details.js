'use strict';

angular.module('yoBathroomLocatorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('details', {
        url: '/details/:id',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
