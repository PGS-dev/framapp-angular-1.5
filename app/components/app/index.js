import AppComponent from './app.component';
import AppService from './app.service';

const appModule = angular
    .module('app.components.appModule', [])
    .component('appComponent', AppComponent)
    .service('appService', AppService)
    .name;

export default appModule;
