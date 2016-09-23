import navbarModule from './navbar';
import appModule from './app';
import categoryModule from './category';
import footerModule from './footer';

const componentsModule = angular
    .module('app.components', [
        navbarModule,
        appModule,
        categoryModule,
        footerModule
    ])
    .name;

export default componentsModule;
