import AppComponent from './app.component';
import DataService from './app.service';

const appModule = angular
    .module('app.components.appModule', [])
    .component('appComponent', AppComponent)
    .service('dataService', DataService)
    .name;

export default appModule;
