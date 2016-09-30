import ProductsAdminComponent from './products.component';
import './products.scss';

const productsAdminModule = angular
    .module('app.pages.productsAdminModule', [])
    .component('productsAdminComponent', ProductsAdminComponent)
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
