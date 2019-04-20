'use strict';

angular.module('patients')
    .controller('PatientListController', ["$scope", "$http", "$q", function ($scope, $http, $q) {
        $scope.greeting = "Paciente World";

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
        getPatientList();

        $scope.searchPatient = function() {
            getPatientList(this.patientName);
        };

    }])

    .controller('PatientNewController', ["$scope", "$http", "$q", function ($scope, $http, $q) {
        $scope.savePatient = function savePatient() {
            $http({
                method: 'PUT',
                url: BACKEND + '/patients/add',
                data: {
                    name: this.name,
                    firstLastName: this.first_last_name,
                    secondLastName: this.second_last_name,
                    birthDate: this.birthday,
                    dni: this.dni,
                    sex: this.sex,
                    landLine: this.land_line,
                    mobileLine: this.mobile_line,
                    email: this.email,
                    address: this.address,
                    doctor: this.doctor,
                    startDate: this.startDate
                }
            }).then(function successCallback(response) {
                window.location.href = '/#!/patients';
            });
        }

    }])

    .controller('PatientEditController', ["$scope", "$http", "$q", "$routeParams", function ($scope, $http, $q, $routeParams) {
        $scope.editPatient = function editPatient() {
            $http({
                method: 'PUT',
                url: BACKEND + '/patients/update',
                data: {
                    id: this.id,
                    name: this.name,
                    firstLastName: this.first_last_name,
                    secondLastName: this.second_last_name,
                    birthDate: this.birthday,
                    dni: this.dni,
                    sex: this.sex,
                    landLine: this.land_line,
                    mobileLine: this.mobile_line,
                    email: this.email,
                    address: this.address,
                    doctor: this.doctor,
                    startDate: this.startDate
                }
            }).then(function successCallback(response) {
                window.location.href = '/#!/patients';
            });
        }

        function getPatient() {
            $http({
                method: 'GET',
                url: BACKEND + '/patients/get/' + $routeParams.id
            }).then(function successCallback(response) {
                var patient = response.data[0];
                $scope.id = patient.id;
                $scope.name = patient.nombres;
                $scope.first_last_name = patient.apepaterno;
                $scope.second_last_name = patient.apematerno;
                $scope.birthday = new Date(patient.fechanace.date);
                $scope.dni = patient.dni;
                $scope.sex = patient.sexo;
                $scope.land_line = patient.telefono;
                $scope.mobile_line = patient.celular;
                $scope.email = patient.email;
                $scope.address = patient.direccion;
                $scope.doctor = patient.medcon;
                $scope.startDate = new Date(patient.fingreso.date);
            });
        }
        getPatient();

    }]);
