import mainPageModule from './main';
import categoryViewModule from './category';
import productViewModule from './product';
import categoriesAdminModule from './admin/categories/list';
import categoryCreateModule from './admin/categories/create';
import productsAdminModule from './admin/products/list';
import productCreateModule from './admin/products/create';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule,
        categoryViewModule,
        productViewModule,
        categoriesAdminModule,
        categoryCreateModule,
        productsAdminModule,
        productCreateModule
    ])
    .name;

export default pagesModule;
