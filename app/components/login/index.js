import LoginComponent from './login.component'
import './login.scss';

const loginModule = angular
    .module('app.components.loginModule', [])
    .component('loginComponent', LoginComponent)
    .name;

export default loginModule;
