var app12 = angular.module('app12', []);

// Transclude existing data (add other data before)
app12.directive("exDir", function () {
  return {
    transclude: true,
    template: "<div><h4>{{moreLorem}}</h4></div><div ng-transclude></div>"
  }
});

app12.controller('mainCtrl', function($scope) {
  $scope.moreLorem = "The amazing Lorem story";
});
