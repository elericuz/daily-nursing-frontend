'use strict';

angular.module('AsteriaApp').config(['$routeProvider',
    function config($routeProvider) {
        console.log('routes');
        $routeProvider.
        when('/', {
            template: '<home></home>'
        }).
        when('/patients', {
            template: '<patients-list></patients-list>'
        }).
        when('/patients/new', {
            template: '<patients-new></patients-new>'
        }).
        when('/patients/:id', {
            template: '<patients-edit></patients-edit>'
        }).
        when('/monitor/:id', {
            template: '<patient-monitor></patient-monitor>'
        }).
        when('/kardex/:id', {
            template: '<patient-kardex></patient-kardex>'
        }).
        when('/nursing/treatments', {
            template: '<treatment-list></treatment-list>'
        }).
        when('/nursing/procedures', {
            template: '<procedure-list></procedure-list>'
        }).
        when('/nursing/medicines', {
            template: '<medicine-list></medicine-list>'
        }).
        otherwise('/');
    }
]);
