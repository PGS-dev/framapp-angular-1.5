import ToastService from './toast.service'
require('./toast.scss');

const toastModule = angular
    .module('app.components.toastModule', [])
    .service('toastService', ToastService)
    .name;

export default toastModule;
