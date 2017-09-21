var app9 = angular.module('app9', []).directive
("jqlDirective",function () {
  return function (scope,element,attr) {
    var players = element.children();

    var listOfPlayers = "";

    for (var i = 0; i < players.length; i++) {

      if (players.eq(i).text() == "Barry Bonds") {
        players.eq(i).css("color", "red");

        players.eq(i).attr("number","25");
      }

      if (players.eq(i).text() == "Hank Aaron") {
        players.eq(i).addClass('thick');
      }

      listOfPlayers += players.eq(i).text() + ";";

      angular.element(document.querySelector('#childrenList')).text(listOfPlayers);


    } // end for loop

    // Get attribute
    var barryNum = angular.element(document.querySelector('#barry')).attr('number');
    angular.element(document.querySelector('#barrysNumber')).text(barryNum);

    // Remove class
    angular.element(document.querySelector('#hank')).removeClass('thick');

    // Check if has class
    var isHankBold = angular.element(document.querySelector('#hank')).hasClass('thick');
    angular.element(document.querySelector('#hankBold')).text(isHankBold);

    // Check property
    var barryID = angular.element(document.querySelector('#barry')).prop('id');
    angular.element(document.querySelector('#barryID')).text(barryID);

  }
});

app9.controller('mainCtrl',function($scope) {
  $scope.unBold = function() {
    angular.element(document.querySelector('#hank')).toggleClass('thick');
  };
});
