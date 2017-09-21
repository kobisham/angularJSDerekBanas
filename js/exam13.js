var app13 = angular.module('app13', []);

app13.service('HelloService', function() {
  this.HelloService = function () {
    console.log('Hello Service');
  }
});

app13.factory('HelloFactory', function() {
  var factory = {};
  factory.HelloFactory = function () {
    console.log('Hello Factory');
  }
  return factory;
});

app13.controller('mainCtrl',function (HelloService, HelloFactory) {
  HelloService.HelloService();
  HelloFactory.HelloFactory();
})
