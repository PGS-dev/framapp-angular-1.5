import mainPageModule from './main';
import categoryViewModule from './category';
import productViewModule from './product';
import categoriesAdminModule from './admin/categories/list';
import categoryCreateModule from './admin/categories/create';
import productsAdminModule from './admin/products/list';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule,
        categoryViewModule,
        productViewModule,
        categoriesAdminModule,
        categoryCreateModule,
        productsAdminModule
    ])
    .name;

export default pagesModule;
