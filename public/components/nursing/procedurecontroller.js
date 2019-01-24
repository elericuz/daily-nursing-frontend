'use strict';

angular.module('nursing')
    .controller('ProcedureController', ["$scope", "$http", "$q", function ($scope, $http, $q) {
        function getList() {
            var url = BACKEND + '/procedures';
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                $scope.proceduresList = response.data;
            });
        }
        getList();

        $scope.addProcedure = function() {
            var url = BACKEND + '/procedures/add';
            var data = {
                procedure: this.procedureRecord
            };

            if ($scope.procedureId) {
                data = {
                    procedure: this.procedureRecord,
                    procedureId: $scope.procedureId
                };
            }

            $http({
                method: 'PUT',
                url: url,
                data: data
            }).then(function successCallback(response) {
                $scope.procedureRecord = "";
                $scope.procedureId = 0;
                getList();
            });
        };

        $scope.editProcedure = function(procedureId) {
            var url = BACKEND + '/procedures/get/' + procedureId;
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                console.log(response.data[0].procedimiento);
                $scope.procedureRecord = response.data[0].procedimiento;
                $scope.procedureId = response.data[0].id;
            });
        };

        $scope.removeProcedure = function (procedureId) {
            console.log(procedureId);
            var url = BACKEND + '/procedures/remove/' + procedureId;
            $http({
                method: 'DELETE',
                url: url
            }).then(function successCallback(response) {
                getList();
            });
        };
    }]);
