describe('MainController', function() {
// this tells jasmine to use the app module
// for every test for MainController
  beforeEach(module('app'));

  var $controller;
// injecting controller service given by ngMock
// in order to call a function with the controller we'd like
// and also specify a custom $scope for the controller
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  // building test to see if name is set correctly in controller
  it('should have Steve Jobs name', function() {
    var $scope = {};
 
    var controller = $controller('MainController', { $scope: $scope });
    expect(controller.name).toEqual('Steve Jobs');
  });
});