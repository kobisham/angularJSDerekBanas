var app11 = angular.module('app11', []);

// Create custom directive -> player
app11.directive("player", function() {
  var directive = {};
  directive.restrict = 'E';
  directive.template = "{{player.name}} had a {{player.avg}} AVG with {{player.hr}} hometuns and a {{player.obp}} OBP";

  directive.scope = {
    player: "=name"
  };
  directive.compile = function(element, attributes) {
    var linkFunc = function($scope, element, attributes) {
      element.bind('click', function() {
        element.html('Barry disappeared');      });
    }
    return linkFunc;
  }
  return directive;
});

app11.controller('mainCtrl', function($scope) {

  // Add players data
  $scope.BarryBonds = {
    name: "Barry Bonds",
    avg: 0.298,
    hr: 762,
    obp: 0.444
  };
  $scope.HankAaron = {
    name: "Hank Aaron",
    avg: 0.305,
    hr: 755,
    obp: 0.374
  };
  $scope.BabeRuth = {
    name: "Babe Ruth",
    avg: 0.342,
    hr: 714,
    obp: 0.474
  };
  $scope.TedWilliams = {
    name: "Ted Williams",
    avg: 0.344,
    hr: 521,
    obp: 0.482
  };
});
