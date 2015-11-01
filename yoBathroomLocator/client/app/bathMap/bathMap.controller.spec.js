'use strict';

describe('Controller: BathMapCtrl', function () {

  // load the controller's module
  beforeEach(module('yoBathroomLocatorApp'));

  var BathMapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BathMapCtrl = $controller('BathMapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
