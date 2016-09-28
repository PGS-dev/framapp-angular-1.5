import navbarModule from './navbar';
import appModule from './app';
import categoryModule from './category';
import footerModule from './footer';
import loginModule from './login';
import toastModule from './toast';

const componentsModule = angular
    .module('app.components', [
        navbarModule,
        appModule,
        categoryModule,
        footerModule,
        loginModule,
		toastModule
    ])
    .name;

export default componentsModule;
