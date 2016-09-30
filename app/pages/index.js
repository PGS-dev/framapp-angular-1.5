import mainPageModule from './main';
import categoryViewModule from './category';
import productViewModule from './product';
import categoriesAdminModule from './admin/categories/list';
import productsAdminModule from './admin/products/list';

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
