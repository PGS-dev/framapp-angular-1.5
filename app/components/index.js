import alertModule from './alert';
import appModule from './app';
import footerModule from './footer';
import toastModule from './toast';

const componentsModule = angular
    .module('app.components', [
        alertModule,
        appModule,
        toastModule,
        footerModule
    ])
    .name;

export default componentsModule;