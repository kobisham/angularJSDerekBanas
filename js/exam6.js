var app6 = angular.module('app6', []);

app6.controller('heroCtrl', function ($scope, $rootScope) {
    $scope.hero = [
        {realName: "Bruce Wayne", heroName: "Batman"},
        {realName: "Clark kent", heroName: "Superman"}
    ];

    $scope.getHeroData = function () {  
        heroSearch($scope.heroName)
    };

    function heroSearch(name) {  
        $scope.heroData = "Not found";
        for (var i = 0; i < $scope.hero.length; i++) {
            var element = $scope.hero[i];
            if(element.heroName===name) {
                $scope.heroData = element.realName +
                " is " + element.heroName;
            }   
        }
    }

    $scope.$on("heroUpdated", function (event,args) {  
        $scope.hero.push({
            realName: args.realName,
            heroName: args.heroName
        })
    });

    $scope.addHeroData = function (heroName,realName) {  
        $rootScope.$broadcast("heroUpdated",{
            realName: realName,
            heroName: heroName
        });
        console.log("Real: " + realName + " Hero: " + heroName);
    };
});
    

    
