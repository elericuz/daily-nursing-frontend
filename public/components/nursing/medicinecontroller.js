'use strict';

angular.module('nursing')
    .controller('MedicineController', ["$scope", "$http", "$q", function ($scope, $http, $q) {
        function getPatientList() {
            if ($scope.patientName) {
                var url = BACKEND + '/patients/' + $scope.patientName
            } else {
                var url = BACKEND + '/patients/'
            }
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                $scope.patientsList = response.data;
            });
        }
    }]);
