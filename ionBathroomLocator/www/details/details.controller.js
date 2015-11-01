'use strict';

angular.module('ionBathroomLocatorApp')
    .controller('DetailsCtrl', function ($scope, $firebaseArray, $stateParams) {

        $scope.id = $stateParams.id;

    }
);
