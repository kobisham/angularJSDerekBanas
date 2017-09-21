var app8 = angular.module('app8', []);

app8.controller('mainCtrl',function($scope) {
  $scope.students = [
    {name: 'George Thomas', gpa: 3.5},
    {name: 'Susy Smith', gpa: 3.6},
    {name: 'Paul Marks', gpa: 3.2},
    {name: 'Sue Edgar', gpa: 3.8}
  ];

  $scope.student = {
    gpas: [
      {name: 'George Thomas', gpa: 3.5},
      {name: 'Susy Smith', gpa: 3.6},
      {name: 'Paul Marks', gpa: 3.2},
      {name: 'Sue Edgar', gpa: 3.8}
    ]
  };

  $scope.currDate = new Date();

  $scope.randomStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  $scope.randArr = [
    "Tomato",
    "Potato",
    "Bread",
    "Pickles"
  ];

  $scope.weather = [
    {day: 'Monday', rain:false},
    {day: 'Tuesday', rain:true}
  ];
});



app8.filter('raining', function() {
    return function(input) {
        return input ? '\u2602' : '\u2600';
    };
});
