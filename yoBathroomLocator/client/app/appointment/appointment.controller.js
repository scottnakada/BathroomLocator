'use strict';

angular.module('yoBathroomLocatorApp')
    .controller('AppointmentCtrl', function ($scope, $firebaseArray, $stateParams) {

        $scope.id = $stateParams.id;

    }
);
