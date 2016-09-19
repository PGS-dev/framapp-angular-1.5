import appModule from './app';

const componentsModule = angular
    .module('app.components', [
        appModule
    ])
    .name;

export default componentsModule;