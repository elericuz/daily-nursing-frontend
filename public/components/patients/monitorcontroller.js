'use strict';

angular.module('patients')
    .controller('MonitorController', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $scope.activeTab = 'tracking';
        $scope.patientId = $routeParams.id;

        $scope.nurseryHours = [
            {hour : "2am", label : "2 am"},
            {hour : "4am", label : "4 am"},
            {hour : "6am", label : "6 am"},
            {hour : "8am", label : "8 am"},
            {hour : "10am", label : "10 am"},
            {hour : "12pm", label : "12 pm"},
            {hour : "2pm", label : "2 pm"},
            {hour : "4pm", label : "4 pm"},
            {hour : "6pm", label : "6 pm"},
            {hour : "8pm", label : "8 pm"},
            {hour : "10pm", label : "10 pm"},
            {hour : "12am", label : "12 am"}
        ];

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

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

        function getProceduresList() {
            var url = BACKEND + '/procedures';
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                $scope.allProceduresList = response.data;
            });
        }
        getProceduresList();

        function getPatientProfile() {
            $http({
                method: 'GET',
                url: BACKEND + '/patients/profile/' + $scope.patientId
            }).then(function successCallback(response) {
                $scope.patientName = response.data[0].xpaciente;
                $scope.patientId = response.data[0].id;
                getNurseryInfo();
                getBalanceInfo();
                getObservationInfo();
            });
        }
        getPatientProfile();

        $scope.dateChange = function() {
            console.log($scope.dt);
            getNurseryInfo();
            getBalanceInfo();
            getObservationInfo();
        };

        function getNurseryInfo() {
            $http({
                method: 'GET',
                url: BACKEND + '/patients/monitor/nursery/' + $scope.patientId,
                params: { currentDate: $scope.dt }
            }).then(function successCallback(response) {
                $scope.proceduresList = response.data;
            });
        }

        function getBalanceInfo() {
            $http({
                method: 'GET',
                url: BACKEND + '/patients/monitor/balance/' + $scope.patientId,
                params: { currentDate: $scope.dt }
            }).then(function successCallback(response) {
                $scope.incomeList = response.data.income;
                $scope.outcomeList = response.data.outcome;
            });
        }

        function getObservationInfo() {
            $http({
                method: 'GET',
                url: BACKEND + '/patients/monitor/observations/' + $scope.patientId,
                params: { currentDate: $scope.dt }
            }).then(function successCallback(response) {
                $scope.dayList = response.data.day;
                $scope.nightList = response.data.night;
            });
        }

        $scope.trackingTab = function($tab) {
            $scope.activeTab = $tab;
        };

        $scope.saveNurseryRecord = function() {
            $http({
                method: 'PUT',
                url: BACKEND + '/patients/monitor/nursery/' + this.patientId,
                data: {
                    patientId: this.patientId,
                    date: this.dt,
                    hour: this.selectedHourNursery,
                    procedure: this.topicNursery,
                    value: this.valueNursery
                }
            }).then(function successCallback(response) {
                getNurseryInfo();
            });
        };

        $scope.saveBalanceRecord = function() {
            $http({
                method: 'PUT',
                url: BACKEND + '/patients/monitor/balance/' + this.patientId,
                data: {
                    patientId: this.patientId,
                    treatment: this.treatmentTypeId,
                    date: this.dt,
                    hour: this.balanceHourRecord,
                    value: this.valueBalance
                }
            }).then(function successCallback(response) {
                getBalanceInfo();
            });
        };

        $scope.saveObsRecord = function() {
            $http({
                method: 'PUT',
                url: BACKEND + '/patients/monitor/obs/' + this.patientId,
                data: {
                    patientId: this.patientId,
                    date: this.dt,
                    turn: this.turnObs,
                    value: this.noteObs
                }
            }).then(function successCallback(response) {
                getObservationInfo();
            });
        };
    }]);
