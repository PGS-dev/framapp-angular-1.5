import mainPageModule from './main';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule
    ])
    .name;

export default pagesModule;
