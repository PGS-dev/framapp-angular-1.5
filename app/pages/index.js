import mainPageModule from './main';
import categoryViewModule from './category';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule,
        categoryViewModule
    ])
    .name;

export default pagesModule;
