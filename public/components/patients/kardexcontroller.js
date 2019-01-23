'use strict';

angular.module('patients')
    .controller('KardexController', function ($scope) {
        $scope.greeting = "Kardex World";

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();


    });
