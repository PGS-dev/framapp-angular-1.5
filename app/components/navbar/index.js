import NavbarComponent from './navbar.component'
import './navbar.scss';

const navbarModule = angular
    .module('app.components.navbarModule', [])
    .component('navbarComponent', NavbarComponent)
    .name;

export default navbarModule;
