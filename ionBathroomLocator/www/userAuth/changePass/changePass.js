'use strict';

angular.module('ionBathroomLocatorApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('app.changePass', {
            url: '/changePass',
            views: {
              'menuContent': {
                templateUrl: "userAuth/changePass/changePass.html",
                controller: 'ChangePassCtrl'
              }
            }
          });
    });
