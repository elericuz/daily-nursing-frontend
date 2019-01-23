angular.module('nursing')
    .component('treatmentList', {
        templateUrl: '/components/nursing/treatments.html',
        controller: 'TreatmentController'
    })
    .component('procedureList', {
        templateUrl: '/components/nursing/procedures.html',
        controller: 'ProcedureController'
    })
    .component('medicineList', {
        templateUrl: '/components/nursing/medicines.html',
        controller: 'MedicineController'
    });
