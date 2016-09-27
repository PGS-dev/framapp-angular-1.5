import navbarModule from './navbar';
import appModule from './app';
import categoryModule from './category';
import footerModule from './footer';
import loginModule from './login';

const componentsModule = angular
    .module('app.components', [
        navbarModule,
        appModule,
        categoryModule,
        footerModule,
        loginModule
    ])
    .name;

export default componentsModule;
