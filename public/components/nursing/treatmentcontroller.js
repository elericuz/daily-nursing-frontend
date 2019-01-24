'use strict';

angular.module('nursing')
    .controller('TreatmentController', ["$scope", "$http", "$q", function ($scope, $http, $q) {
        function getTreatmentsList() {
            var url = BACKEND + '/treatments';
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                $scope.treatmentsList = response.data;
            });
        }
        getTreatmentsList();

        $scope.addTreatment = function() {
            var url = BACKEND + '/treatments/add';
            var data = {
                type: this.treatmentType,
                treatment: this.treatmentRecord
            };

            if ($scope.treatmentId) {
                data = {
                    type: this.treatmentType,
                    treatment: this.treatmentRecord,
                    treatmentId: $scope.treatmentId
                };
            }

            $http({
                method: 'PUT',
                url: url,
                data: data
            }).then(function successCallback(response) {
                getTreatmentsList();
            });
        };

        $scope.editTreatment = function(treatmentId) {
            var url = BACKEND + '/treatments/get/' + treatmentId;
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                console.log(response.data[0].tratamiento);
                $scope.treatmentRecord = response.data[0].tratamiento;
                $scope.treatmentType = response.data[0].tipo;
                $scope.treatmentId = response.data[0].id;
            });
        };

        $scope.removeTreatment = function (treatmentId) {
            console.log(treatmentId);
            var url = BACKEND + '/treatments/remove/' + treatmentId;
            $http({
                method: 'DELETE',
                url: url
            }).then(function successCallback(response) {
                getTreatmentsList();
            });
        };
    }]);
