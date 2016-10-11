import ProductsAdminComponent from './products.component';
import './products.scss';
import ProductsAdminService from './products.service';

const productsAdminModule = angular
    .module('app.pages.productsAdminModule', [])
    .component('productsAdminComponent', ProductsAdminComponent)
    .service('productsAdminService', ProductsAdminService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.products', {
                url: '/products',
                views: {
                    'main@': 'productsAdminComponent'
                }
            });
    })
    .name;

export default productsAdminModule;
