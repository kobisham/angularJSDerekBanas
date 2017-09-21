var app14 = angular.module('app14', ["ngSanitize"]);

app14.controller('mainCtrl',function ($scope,$window,$location,$interval,$log,$exceptionHandler, $sanitize) {
  $scope.greetUser = function (userName) {
    $window.alert('Hello ' + userName);
  }

  $scope.currURL = $location.absUrl();
  $scope.currProtocol = $location.protocol();
  $scope.currHost = $location.host();
  $scope.currPort = $location.port();
  $location.path("#/the/path");
  $scope.currPath = $location.path();
  $location.search("random=staff");
  $scope.currSearch = $location.search();

  $interval(function () {
    var hour = new Date().getHours();
    var minutes = ('0' + new Date().getMinutes()).slice(-2);
    var seconds = ('0' + new Date().getSeconds()).slice(-2);

    $scope.time = hour + ':' + minutes + ':' + seconds;
  },2000);


    $scope.$log = $log;

    $scope.throwException = function () {
      try {
        throw new Error('Exception thrown');
      } catch (e) {
        $exceptionHandler(e.message,'Caught exception');
      }
    }
});
