'use strict';

angular.module('nursing')
    .controller('ProcedureController', ["$scope", "$http", "$q", function ($scope, $http, $q) {
        function getPatientList() {
            if ($scope.patientName) {
                var url = 'http://127.0.0.1:8080/patients/' + $scope.patientName
            } else {
                var url = 'http://127.0.0.1:8080/patients/'
            }
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                $scope.patientsList = response.data;
            });
        }
        // getPatientList();
        //
        // $scope.searchPatient = function() {
        //     getPatientList(this.patientName);
        // };

    }]);
