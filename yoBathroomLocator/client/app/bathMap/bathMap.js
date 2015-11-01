'use strict';

angular.module('yoBathroomLocatorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bathMap', {
        url: '/bathMap',
        templateUrl: 'app/bathMap/bathMap.html',
        controller: 'BathMapCtrl'
      });
  });