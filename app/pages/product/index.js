import ProductViewComponent from './product.component';
import './product.scss';
import ProductService from './product.service';

const productViewModule = angular
    .module('app.pages.productViewModule', [])
    .component('productViewComponent', ProductViewComponent)
    .service('productService', ProductService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.product', {
                url: '/product/:id',
                views: {
                    'main@': 'productViewComponent'
                }
            });
    })
    .name;

export default productViewModule;
