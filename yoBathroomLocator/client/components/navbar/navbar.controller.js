'use strict';

angular.module('yoBathroomLocatorApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth, toaster) {
        $scope.menu = [
           {
                'title': 'Bathroom Map',
                'link': '/bathMap'
           }
        ];

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        /* Pull in the current user information from the Auth Factory */
        $scope.currentUser = Auth.user;

        /* Return true if the user is signed in */
        $scope.signedIn = Auth.signedIn;

        /* Return true if the user has Manager permissions (or Admin) */
        $scope.isManager = Auth.isManager;

        /* Return true if the user has Admin permissions */
        $scope.isAdmin = Auth.isAdmin;

        /* Return true if the user is a simple pass user, so changing password is ok */
        $scope.changePassOk = Auth.changePassOk;

        /* Logout the user */
        $scope.logout = function () {
            toaster.pop('success', "Logged out successfully");
            Auth.logout();
            $location.path('/home');
        }
    });
