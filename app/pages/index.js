import mainPageModule from './main';
import categoryViewModule from './category';
import productViewModule from './product';
import categoriesAdminModule from './admin/categories';
import productsAdminModule from './admin/products';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule,
        categoryViewModule,
        productViewModule,
        categoriesAdminModule,
        productsAdminModule
    ])
    .name;

export default pagesModule;
