import AppComponent from './app.component';

const appModule = angular
    .module('app.components.appModule', [])
    .component('appComponent', AppComponent)
    .name;

export default appModule;