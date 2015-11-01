'use strict';

angular.module('yoBathroomLocatorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('appointment', {
        url: '/appointment/:id',
        templateUrl: 'app/appointment/appointment.html',
        controller: 'AppointmentCtrl'
      });
  });
