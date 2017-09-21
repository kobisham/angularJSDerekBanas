var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function ($scope) {
    $scope.keydown = function (e) {
        $scope.kdkey = String.fromCharCode(e.keyCode);
    };

    $scope.disableButton = true;
});

