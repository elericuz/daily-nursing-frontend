'use strict';

angular.module('home')
    .controller('HomeController', function($scope) {
        console.log('en home controller');
        $scope.greeting = "Hello World";
    });
