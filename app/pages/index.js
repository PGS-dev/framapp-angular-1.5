import mainPageModule from './main';
import categoryViewModule from './category';
import productViewModule from './product';
import categoriesAdminModule from './admin/categories/list';
import categoryCreateModule from './admin/categories/create';
import categoryEditModule from './admin/categories/edit';
import productsAdminModule from './admin/products/list';
import productCreateModule from './admin/products/create';
import productEditModule from './admin/products/edit';
import profileModule from './profile';

const pagesModule = angular
    .module('app.pages', [
        mainPageModule,
        categoryViewModule,
        productViewModule,
        categoriesAdminModule,
        categoryCreateModule,
        categoryEditModule,
        productsAdminModule,
        productCreateModule,
        productEditModule,
        profileModule
    ])
    .name;

export default pagesModule;
