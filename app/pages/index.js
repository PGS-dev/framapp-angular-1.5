import mainPageModule from './main';
import categoryViewModule from './category';
import productViewModule from './product';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule,
        categoryViewModule,
        productViewModule
    ])
    .name;

export default pagesModule;
