'use strict';

angular.module('patients')
    .controller('KardexController', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $scope.patientId = $routeParams.id;

        $scope.today = function() {
            $scope.dt = new Date();
            $scope.today = new Date();
        };
        $scope.today();

        function getKardex() {
            $http({
                method: 'GET',
                url: BACKEND + '/kardex/' + $scope.patientId,
                params: { currentDate: $scope.dt }
            }).then(function successCallback(response) {
                $scope.kardexList = response.data;
            });
        }

        function getPatientProfile() {
            $http({
                method: 'GET',
                url: BACKEND + '/patients/profile/' + $scope.patientId
            }).then(function successCallback(response) {
                $scope.patientName = response.data[0].xpaciente;
                $scope.patientId = response.data[0].id;
                getKardex();
            });
        }
        getPatientProfile();

        $scope.dateChange = function() {
            getKardex();
        };

        $scope.saveKardex = function() {
            $http({
                method: 'PUT',
                url: BACKEND + '/kardex/add',
                data: {
                    patientId: this.patientId,
                    currentDate: this.dt,
                    medicine: this.medicineRecord,
                    idVia: this.viaIdRecord,
                    dosis: this.dosisRecord
                }
            }).then(function successCallback(response) {
                getKardex();
            });
        };

        $scope.editKardex = function(kardexId) {
            var url = BACKEND + '/kardex/get/' + kardexId;
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                $scope.medicineRecord = response.data[0].medicina;
                $scope.dosisRecord = response.data[0].dosis;
                $scope.viaIdRecord = response.data[0].viaId;
                $scope.medicineId = response.data[0].id;
            });
        };

        $scope.removeKardex = function (kardexId) {
            var url = BACKEND + '/kardex/remove/' + kardexId;
            $http({
                method: 'DELETE',
                url: url
            }).then(function successCallback(response) {
                getKardex();
            });
        };
    }]);
