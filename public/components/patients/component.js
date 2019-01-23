angular.module('patients')
    .component('patientsList', {
        templateUrl: '/components/patients/patientslist.html',
        controller: 'PatientListController'
    })
    .component('patientMonitor', {
        templateUrl: '/components/patients/monitor.html',
        controller: 'MonitorController'
    })
    .component('patientKardex', {
        templateUrl: '/components/patients/kardex.html',
        controller: 'KardexController'
    });
