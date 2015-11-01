'use strict';

angular.module('yoBathroomLocatorApp')
    .controller('DetailsCtrl', function ($scope, $firebaseArray, $stateParams) {

        $scope.id = $stateParams.id;

    }
);
