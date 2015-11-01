'use strict';

angular.module('yoBathroomLocatorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editProduct', {
        url: '/editProduct',
        templateUrl: 'app/shoppingCart/editProduct/editProduct.html',
        controller: 'EditProductCtrl'
      });
  });
