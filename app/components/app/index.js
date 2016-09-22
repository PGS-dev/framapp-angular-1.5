import AppComponent from './app.component';
import GetDataService from './app.service';

const appModule = angular
    .module('app.components.appModule', [])
    .component('appComponent', AppComponent)
    .service('getDataService', GetDataService)
    .name;

export default appModule;
