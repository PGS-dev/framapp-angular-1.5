import alertService from './alert.service'

const alertModule = angular
    .module('app.components.alertModule', [])
    .service('alertService', alertService)
    .name;

export default alertModule;