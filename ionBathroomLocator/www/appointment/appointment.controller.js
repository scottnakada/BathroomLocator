'use strict';

angular.module('ionBathroomLocatorApp')
    .controller('AppointmentCtrl', function ($scope, $firebaseArray, $stateParams) {

        $scope.id = $stateParams.id;

    }
);
