import navbarModule from './navbar';
import appModule from './app';
import footerModule from './footer';

const componentsModule = angular
    .module('app.components', [
        navbarModule,
        appModule,
        footerModule
    ])
    .name;

export default componentsModule;
