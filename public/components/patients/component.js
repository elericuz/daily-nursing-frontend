angular.module('patients')
    .component('patientsList', {
        templateUrl: '/components/patients/patientslist.html',
        controller: 'PatientListController'
    })
    .component('patientsNew', {
        templateUrl: '/components/patients/patientsnew.html',
        controller: 'PatientNewController'
    })
    .component('patientsEdit', {
        templateUrl: '/components/patients/patientsedit.html',
        controller: 'PatientEditController'
    })
    .component('patientMonitor', {
        templateUrl: '/components/patients/monitor.html',
        controller: 'MonitorController'
    })
    .component('patientKardex', {
        templateUrl: '/components/patients/kardex.html',
        controller: 'KardexController'
    });
